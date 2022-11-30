import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { Trans } from '@lingui/macro'
import { Currency, CurrencyAmount, Percent } from '@uniswap/sdk-core'
import { FeeAmount, NonfungiblePositionManager ,toHex} from '@uniswap/v3-sdk'
import { useWeb3React } from '@web3-react/core'
import { ElementName, Event, EventName } from 'components/AmplitudeAnalytics/constants'
import { TraceEvent } from 'components/AmplitudeAnalytics/TraceEvent'
import { sendEvent } from 'components/analytics'
import UnsupportedCurrencyFooter from 'components/swap/UnsupportedCurrencyFooter'
import useParsedQueryString from 'hooks/useParsedQueryString'
import { useCallback, useContext, useEffect, useState } from 'react'
import { AlertTriangle } from 'react-feather'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'rebass'
import {
  useRangeHopCallbacks,
  useV3DerivedMintInfo,
  useV3MintActionHandlers,
  useV3MintState,
} from 'state/mint/v3/hooks'
import { ThemeContext } from 'styled-components/macro'

import { ButtonError, ButtonLight, ButtonPrimary, ButtonText, ButtonYellow } from '../../components/Button'
import { BlueCard, OutlineCard, YellowCard } from '../../components/Card'
import { AutoColumn } from '../../components/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import FeeSelector from '../../components/FeeSelector'
import HoverInlineText from '../../components/HoverInlineText'
import LiquidityChartRangeInput from '../../components/LiquidityChartRangeInput'
import { AddRemoveTabs } from '../../components/NavigationTabs'
import { PositionPreview } from '../../components/PositionPreview'
import RangeSelector from '../../components/RangeSelector'
import PresetsButtons from '../../components/RangeSelector/PresetsButtons'
import RateToggle from '../../components/RateToggle'
import Row, { AutoRow, RowBetween, RowFixed } from '../../components/Row'
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink'
import TransactionConfirmationModal, { ConfirmationModalContent } from '../../components/TransactionConfirmationModal'
import { NONFUNGIBLE_POSITION_MANAGER_ADDRESSES } from '../../constants/addresses'
import { ZERO_PERCENT } from '../../constants/misc'
import { WRAPPED_NATIVE_CURRENCY } from '../../constants/tokens'
import { useCurrency } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { useArgentWalletContract } from '../../hooks/useArgentWalletContract'
import { useV3NFTPositionManagerContract } from '../../hooks/useContract'
import { useDerivedPositionInfo } from '../../hooks/useDerivedPositionInfo'
import { useIsSwapUnsupported } from '../../hooks/useIsSwapUnsupported'
import { useStablecoinValue } from '../../hooks/useStablecoinPrice'
import useTransactionDeadline from '../../hooks/useTransactionDeadline'
import { useV3PositionFromTokenId } from '../../hooks/useV3Positions'
import { useToggleWalletModal } from '../../state/application/hooks'
import { Bound, Field } from '../../state/mint/v3/actions'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { TransactionType } from '../../state/transactions/types'
import { useIsExpertMode, useUserSlippageToleranceWithDefault } from '../../state/user/hooks'
import { ExternalLink, ThemedText } from '../../theme'
import approveAmountCalldata from '../../utils/approveAmountCalldata'
import { calculateGasMargin } from '../../utils/calculateGasMargin'
import { currencyId } from '../../utils/currencyId'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { Dots } from '../Pool/styleds'
import { Review } from './Review'
import eth from '../../assets/img/eth.png';
import azuki from '../../assets/img/azuki.png';
import setting from "../../assets/img/setting.png";
import {ChainId, web3} from "../../app/Config";
import {ethers} from "ethers";
import MidaswapV3RouterAbi from "../../app/contracts/MidaswapV3Router.json";


import {
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Modal, Radio } from 'antd';
import { getErc20Contract, getErc721Contract, getMidaswapV3Router ,getINonfungiblePositionManager} from "../../app/Contract";
import { Progress, message,InputNumber } from 'antd';

import { Network, Alchemy } from 'alchemy-sdk';
import teamJSON from "../../store/team.json";
import {
  CurrencyDropdown,
  DynamicSection,
  HideMedium,
  MediumOnly,
  PageWrapper,
  ResponsiveTwoColumns,
  RightContainer,
  ScrollablePage,
  StackedContainer,
  StackedItem,
  StyledInput,
  Wrapper,
} from './styled'

const DEFAULT_ADD_IN_RANGE_SLIPPAGE_TOLERANCE = new Percent(50, 10_000)
interface PoolOrder {
  nft_address: any,
  tokenB: any,
  tokenId: any,
  _amountA: any,
  _amountB: any,
  nftApprove: false,
  tokenBApprove: any,
  tokenAApprove: any
}

interface PoolInfo {
  poolsAddress: any,
  nft_address: any,
  id: any,
  tokenA: any,
  tokenB: any,
  fractionNFTAddress: any
}


export default  function AddLiquidity() {
  ///====================================
  const [poolOrder, setPoolOrder] = useState({} as PoolOrder);
  const [poolInfo, setPoolInfo] = useState({} as PoolInfo);
  const [myNfts, setMyNfts] = useState([] as Array<any>);
  const onChange = (e: any) => {
    if (!poolOrder.nftApprove) {
       approve721();
    }
    poolOrder.tokenId = e.target.value;
    setPoolOrder({ ...poolOrder });
 }

 async function approve721() {
  const contract = await getErc721Contract(poolInfo.nft_address);
  contract.methods.setApprovalForAll(poolInfo.fractionNFTAddress, true).send({
     from: account
  }).on('error', (error: any) => {
     message.error(error);
     getErc721Approve();
  }).on('transactionHash', (txHash: any) => {
     console.warn("transactionHash", txHash)
  }).on('receipt', (receipt: any) => {
     message.success("Success");
     getErc721Approve();
  })
}


async function getErc721Approve() {
  const contract = await getErc721Contract(poolInfo.nft_address);
  poolOrder.nftApprove = await contract.methods.isApprovedForAll(account, poolInfo.fractionNFTAddress).call();
  setPoolOrder({ ...poolOrder });
}

async function getTokenAaddrees() {
  const contract = await getErc721Contract(poolInfo.nft_address);
  poolOrder.nftApprove = await contract.methods.isApprovedForAll(account, poolInfo.fractionNFTAddress).call();
  setPoolOrder({ ...poolOrder });
}

async function getNftsForOwner() {
  if (!account) {
     return;
  }
  const settings = {
     apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
     network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(settings);
  let e = await alchemy.nft.getNftsForOwner(account);
  let newArr = [] as Array<any>;
  for (let index = 0; index < e.ownedNfts.length; index++) {
     let item = e.ownedNfts[index];
     if (item.contract.address == teamJSON.nftAddrees.toLowerCase()) {
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = item.contract.name;
        data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
        data.tokenId = item.tokenId
        newArr.push(data);
     }
  }
  setMyNfts(newArr);
}

// async function getTokenA(address_:any) {
//   return address_?'0x0B5844E92D8F450D5e542574e9ba6DDf77c04832':"0x0B5844E92D8F450D5e542574e9ba6DDf77c04832" as string;
// }


  const navigate = useNavigate()
  const {
    nftaddress,
    currencyIdB,
    feeAmount: feeAmountFromUrl,
    tokenId,
  } = useParams<{ nftaddress?: string; currencyIdB?: string; feeAmount?: string; tokenId?: string }>()

 const currencyIdA=nftaddress?'0xB22Bfd62C58Cee5d7867e58AFf6C491361a779bC':"0xB22Bfd62C58Cee5d7867e58AFf6C491361a779bC" as string;
  const {account, chainId, provider } = useWeb3React()
  const theme = useContext(ThemeContext)
  const toggleWalletModal = useToggleWalletModal() // toggle wallet when disconnected
  const expertMode = useIsExpertMode()
  const addTransaction = useTransactionAdder()
  const positionManager = useV3NFTPositionManagerContract()
  const parsedQs = useParsedQueryString();

  // check for existing position if tokenId in url
  const { position: existingPositionDetails, loading: positionLoading } = useV3PositionFromTokenId(
    tokenId ? BigNumber.from(tokenId) : undefined
  )
  const hasExistingPosition = !!existingPositionDetails && !positionLoading
  const { position: existingPosition } = useDerivedPositionInfo(existingPositionDetails)

  // fee selection from url
  const feeAmount: FeeAmount | undefined =
    feeAmountFromUrl && Object.values(FeeAmount).includes(parseFloat(feeAmountFromUrl))
      ? parseFloat(feeAmountFromUrl)
      : undefined


      
  const baseCurrency = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)
  // prevent an error if they input ETH/WETH
  const quoteCurrency =
    baseCurrency && currencyB && baseCurrency.wrapped.equals(currencyB.wrapped) ? undefined : currencyB

  // mint state
  const { independentField, typedValue, startPriceTypedValue, rightRangeTypedValue, leftRangeTypedValue } =
    useV3MintState()

  const {
    pool,
    ticks,
    dependentField,
    price,
    pricesAtTicks,
    parsedAmounts,
    currencyBalances,
    position,
    noLiquidity,
    currencies,
    errorMessage,
    invalidPool,
    invalidRange,
    outOfRange,
    depositADisabled,
    depositBDisabled,
    invertPrice,
    ticksAtLimit,
  } = useV3DerivedMintInfo(
    baseCurrency ?? undefined,
    quoteCurrency ?? undefined,
    feeAmount,
    baseCurrency ?? undefined,
    existingPosition
  )


  const { onFieldAInput, onFieldBInput, onLeftRangeInput, onRightRangeInput, onStartPriceInput } =
    useV3MintActionHandlers(noLiquidity)

  const isValid = !errorMessage && !invalidRange

  // modal and loading
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm

  // capital efficiency warning
  const [showCapitalEfficiencyWarning, setShowCapitalEfficiencyWarning] = useState(false)

  useEffect(() => setShowCapitalEfficiencyWarning(false), [baseCurrency, quoteCurrency, feeAmount])

  useEffect(() => {
    if (
      typeof parsedQs.minPrice === 'string' &&
      parsedQs.minPrice !== leftRangeTypedValue &&
      !isNaN(parsedQs.minPrice as any)
    ) {
      onLeftRangeInput(parsedQs.minPrice)
    }

    if (
      typeof parsedQs.maxPrice === 'string' &&
      parsedQs.maxPrice !== rightRangeTypedValue &&
      !isNaN(parsedQs.maxPrice as any)
    ) {
      onRightRangeInput(parsedQs.maxPrice)
    }
  }, [parsedQs, rightRangeTypedValue, leftRangeTypedValue, onRightRangeInput, onLeftRangeInput])

  // txn values
  const deadline = useTransactionDeadline() // custom from users settings

  const [txHash, setTxHash] = useState<string>('')

  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  const usdcValues = {
    [Field.CURRENCY_A]: useStablecoinValue(parsedAmounts[Field.CURRENCY_A]),
    [Field.CURRENCY_B]: useStablecoinValue(parsedAmounts[Field.CURRENCY_B]),
  }

  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: CurrencyAmount<Currency> } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {}
  )

  const atMaxAmounts: { [field in Field]?: CurrencyAmount<Currency> } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
      }
    },
    {}
  )

  const argentWalletContract = useArgentWalletContract()

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useApproveCallback(
    argentWalletContract ? undefined : parsedAmounts[Field.CURRENCY_A],
    chainId ? NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[chainId] : undefined
  )
  const [approvalB, approveBCallback] = useApproveCallback(
    argentWalletContract ? undefined : parsedAmounts[Field.CURRENCY_B],
    chainId ? NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[chainId] : undefined
  )

  const allowedSlippage = useUserSlippageToleranceWithDefault(
    outOfRange ? ZERO_PERCENT : DEFAULT_ADD_IN_RANGE_SLIPPAGE_TOLERANCE
  )

  async function onAdd() {
    debugger
    if (!chainId || !provider || !account) return

    if (!positionManager || !baseCurrency || !quoteCurrency) {
      return
    }
     const  MidaswapV3Router =await getMidaswapV3Router(provider.getSigner());
     await MidaswapV3Router.addStep(1);
     MidaswapV3Router.on("addStepEvet",(sender,num)=>{
         console.log("sender:"+sender+" num:"+num);
    })
    if (position && account && deadline) {
      // const { amount0: amount0Desired, amount1: amount1Desired } = position.mintAmounts
      // const minimumAmounts = position.mintAmountsWithSlippage(allowedSlippage);
      // const amount0Min = toHex(minimumAmounts.amount0)
      // const amount1Min = toHex(minimumAmounts.amount1)
      // const parms =  {
      //   token0: position.pool.token0.address,
      //   token1: position.pool.token1.address,
      //   fee: position.pool.fee,
      //   tickLower: position.tickLower,
      //   tickUpper: position.tickUpper,
      //   amount0Desired: toHex(amount0Desired),
      //   amount1Desired: toHex(amount1Desired),
      //   amount0Min,
      //   amount1Min,
      //   recipient: account,
      //   deadline:  deadline?.toNumber()
      // }
      let poolAddress="0x0000000000000000000000000000000000000000";
      if(noLiquidity){
        poolAddress="0x0000000000000000000000000000000000000000";
      }



      
      // const parms = {
      //   token0:"0x3DEA4c82210c66050d0C1818530740b5Ece108E8",
      //   token1:"0x94ecC3f84e12D586B0741E87CaA6c140b76A2938",
      //   fee:500,tickLower:-24850,tickUpper:-20800,
      //   amount0Desired:web3.utils.toWei("12.108117954131814004"),
      //   amount1Desired:web3.utils.toWei("10"),
      //   amount0Min: web3.utils.toWei("11.822034484697754124"),
      //   amount1Min:web3.utils.toWei("0.971251300382961695"),
      //   recipient:"0x6bcA71b551c388533fb24f8981fB212253F9db6a",
      //   deadline: 1668889728
      //   }

       

      //  const uniswapV3Router = await getMidaswapV3Router();
      //  await uniswapV3Router.methods.mintFromNFTs(teamJSON.nftAddrees,teamJSON.tokenB,poolAddress,web3.utils.toWei("20"),[1],0,web3.utils.toWei("1"),parms).send({
      //    from: "0x4AD9607e706e99Bc6E4D5FDF72f322aa26730300"
      // }).on('error', (error: any) => {
      //    message.error(error);
      // }).on('transactionHash', (txHash: any) => {
      //    console.warn("transactionHash", txHash)
      // }).on('receipt', (receipt: any) => {
      //    message.success("Success");
      //    getNftsForOwner();
      // })

      // const useNative = baseCurrency.isNative ? baseCurrency : quoteCurrency.isNative ? quoteCurrency : undefined
      // const { calldata, value } =
      //   hasExistingPosition && tokenId
      //     ? NonfungiblePositionManager.addCallParameters(position, {
      //       tokenId,
      //       slippageTolerance: allowedSlippage,
      //       deadline: deadline.toString(),
      //       useNative,
      //     })
      //     : NonfungiblePositionManager.addCallParameters(position, {
      //       slippageTolerance: allowedSlippage,
      //       recipient: account,
      //       deadline: deadline.toString(),
      //       useNative,
      //       createPool: noLiquidity,
      //     })

      // let txn: { to: string; data: string; value: string } = {
      //   to: NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[chainId],
      //   data: calldata,
      //   value,
      // }

      // if (argentWalletContract) {
      //   const amountA = parsedAmounts[Field.CURRENCY_A]
      //   const amountB = parsedAmounts[Field.CURRENCY_B]
      //   const batch = [
      //     ...(amountA && amountA.currency.isToken
      //       ? [approveAmountCalldata(amountA, NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[chainId])]
      //       : []),
      //     ...(amountB && amountB.currency.isToken
      //       ? [approveAmountCalldata(amountB, NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[chainId])]
      //       : []),
      //     {
      //       to: txn.to,
      //       data: txn.data,
      //       value: txn.value,
      //     },
      //   ]
      //   const data = argentWalletContract.interface.encodeFunctionData('wc_multiCall', [batch])
      //   txn = {
      //     to: argentWalletContract.address,
      //     data,
      //     value: '0x0',
      //   }
      // }

      // setAttemptingTxn(true)

      // provider
      //   .getSigner()
      //   .estimateGas(txn)
      //   .then((estimate) => {
      //     const newTxn = {
      //       ...txn,
      //       gasLimit: calculateGasMargin(estimate),
      //     }
      //     return provider
      //       .getSigner()
      //       .sendTransaction(newTxn)
      //       .then((response: TransactionResponse) => {
      //         setAttemptingTxn(false)
      //         addTransaction(response, {
      //           type: TransactionType.ADD_LIQUIDITY_V3_POOL,
      //           baseCurrencyId: currencyId(baseCurrency),
      //           quoteCurrencyId: currencyId(quoteCurrency),
      //           createPool: Boolean(noLiquidity),
      //           expectedAmountBaseRaw: parsedAmounts[Field.CURRENCY_A]?.quotient?.toString() ?? '0',
      //           expectedAmountQuoteRaw: parsedAmounts[Field.CURRENCY_B]?.quotient?.toString() ?? '0',
      //           feeAmount: position.pool.fee,
      //         })
      //         setTxHash(response.hash)
      //         sendEvent({
      //           category: 'Liquidity',
      //           action: 'Add',
      //           label: [currencies[Field.CURRENCY_A]?.symbol, currencies[Field.CURRENCY_B]?.symbol].join('/'),
      //         })
      //       })
      //   })
      //   .catch((error) => {
      //     console.error('Failed to send transaction', error)
      //     setAttemptingTxn(false)
      //     // we only care if the error is something _other_ than the user rejected the tx
      //     if (error?.code !== 4001) {
      //       console.error(error)
      //     }
      //   })
    } else {
      return
    }
  }

  const handleCurrencySelect = useCallback(
    (currencyNew: Currency, currencyIdOther?: string): (string | undefined)[] => {
      const currencyIdNew = currencyId(currencyNew)

      if (currencyIdNew === currencyIdOther) {
        // not ideal, but for now clobber the other if the currency ids are equal
        return [currencyIdNew, undefined]
      } else {
        // prevent weth + eth
        const isETHOrWETHNew =
          currencyIdNew === 'ETH' ||
          (chainId !== undefined && currencyIdNew === WRAPPED_NATIVE_CURRENCY[chainId]?.address)
        const isETHOrWETHOther =
          currencyIdOther !== undefined &&
          (currencyIdOther === 'ETH' ||
            (chainId !== undefined && currencyIdOther === WRAPPED_NATIVE_CURRENCY[chainId]?.address))

        if (isETHOrWETHNew && isETHOrWETHOther) {
          return [currencyIdNew, undefined]
        } else {
          return [currencyIdNew, currencyIdOther]
        }
      }
    },
    [chainId]
  )

  const handleCurrencyASelect = useCallback(
    (currencyANew: Currency) => {
      const [idA, idB] = handleCurrencySelect(currencyANew, currencyIdB)
      if (idB === undefined) {
        navigate(`/add/${idA}`)
      } else {
        navigate(`/add/${idA}/${idB}`)
      }
    },
    [handleCurrencySelect, currencyIdB, navigate]
  )

  const handleCurrencyBSelect = useCallback(
    (currencyBNew: Currency) => {
      const [idB, idA] = handleCurrencySelect(currencyBNew, currencyIdA)
      if (idA === undefined) {
        navigate(`/add/${idB}`)
      } else {
        navigate(`/add/${idA}/${idB}`)
      }
    },
    [handleCurrencySelect, currencyIdA, navigate]
  )

  const handleFeePoolSelect = useCallback(
    (newFeeAmount: FeeAmount) => {
      onLeftRangeInput('')
      onRightRangeInput('')
      navigate(`/add/${currencyIdA}/${currencyIdB}/${newFeeAmount}`)
    },
    [currencyIdA, currencyIdB, navigate, onLeftRangeInput, onRightRangeInput]
  )

  const handleDismissConfirmation = useCallback(() => {
    setShowConfirm(false)
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onFieldAInput('')
      // dont jump to pool page if creating
      navigate('/pool')
    }
    setTxHash('')
  }, [navigate, onFieldAInput, txHash])

  const addIsUnsupported = useIsSwapUnsupported(currencies?.CURRENCY_A, currencies?.CURRENCY_B)

  const clearAll = useCallback(() => {
    onFieldAInput('')
    onFieldBInput('')
    onLeftRangeInput('')
    onRightRangeInput('')
    navigate(`/add`)
  }, [navigate, onFieldAInput, onFieldBInput, onLeftRangeInput, onRightRangeInput])

  // get value and prices at ticks
  const { [Bound.LOWER]: tickLower, [Bound.UPPER]: tickUpper } = ticks
  const { [Bound.LOWER]: priceLower, [Bound.UPPER]: priceUpper } = pricesAtTicks

  const { getDecrementLower, getIncrementLower, getDecrementUpper, getIncrementUpper, getSetFullRange } =
    useRangeHopCallbacks(baseCurrency ?? undefined, quoteCurrency ?? undefined, feeAmount, tickLower, tickUpper, pool)

  // we need an existence check on parsed amounts for single-asset deposits
  const showApprovalA =
    !argentWalletContract && approvalA !== ApprovalState.APPROVED && !!parsedAmounts[Field.CURRENCY_A]
  const showApprovalB =
    !argentWalletContract && approvalB !== ApprovalState.APPROVED && !!parsedAmounts[Field.CURRENCY_B]

  const pendingText = `Supplying ${!depositADisabled ? parsedAmounts[Field.CURRENCY_A]?.toSignificant(6) : ''} ${!depositADisabled ? currencies[Field.CURRENCY_A]?.symbol : ''
    } ${!outOfRange ? 'and' : ''} ${!depositBDisabled ? parsedAmounts[Field.CURRENCY_B]?.toSignificant(6) : ''} ${!depositBDisabled ? currencies[Field.CURRENCY_B]?.symbol : ''
    }`

  const Buttons = () =>
    addIsUnsupported ? (
      <ButtonPrimary disabled={true} $borderRadius="12px" padding={'12px'}>
        <ThemedText.DeprecatedMain mb="4px">
          <Trans>Unsupported Asset</Trans>
        </ThemedText.DeprecatedMain>
      </ButtonPrimary>
    ) : !account ? (
      <TraceEvent
        events={[Event.onClick]}
        name={EventName.CONNECT_WALLET_BUTTON_CLICKED}
        properties={{ received_swap_quote: false }}
        element={ElementName.CONNECT_WALLET_BUTTON}
      >
        <ButtonLight onClick={toggleWalletModal} $borderRadius="12px" padding={'12px'}>
          <Trans>Connect Wallet</Trans>
        </ButtonLight>
      </TraceEvent>
    ) : (
      <AutoColumn gap={'md'}>
        {(approvalA === ApprovalState.NOT_APPROVED ||
          approvalA === ApprovalState.PENDING ||
          approvalB === ApprovalState.NOT_APPROVED ||
          approvalB === ApprovalState.PENDING) &&
          isValid && (
            <RowBetween>
              {showApprovalA && (
                <ButtonPrimary
                  onClick={approveACallback}
                  disabled={approvalA === ApprovalState.PENDING}
                  width={showApprovalB ? '48%' : '100%'}
                >
                  {approvalA === ApprovalState.PENDING ? (
                    <Dots>
                      <Trans>Approving {currencies[Field.CURRENCY_A]?.symbol}</Trans>
                    </Dots>
                  ) : (
                    <Trans>Approve {currencies[Field.CURRENCY_A]?.symbol}</Trans>
                  )}
                </ButtonPrimary>
              )}
              {showApprovalB && (
                <ButtonPrimary
                  onClick={approveBCallback}
                  disabled={approvalB === ApprovalState.PENDING}
                  width={showApprovalA ? '48%' : '100%'}
                >
                  {approvalB === ApprovalState.PENDING ? (
                    <Dots>
                      <Trans>Approving {currencies[Field.CURRENCY_B]?.symbol}</Trans>
                    </Dots>
                  ) : (
                    <Trans>Approve {currencies[Field.CURRENCY_B]?.symbol}</Trans>
                  )}
                </ButtonPrimary>
              )}
            </RowBetween>
          )}
        <ButtonError
          onClick={() => {
            expertMode ? onAdd() : setShowConfirm(true)
          }}
          disabled={
            !isValid ||
            (!argentWalletContract && approvalA !== ApprovalState.APPROVED && !depositADisabled) ||
            (!argentWalletContract && approvalB !== ApprovalState.APPROVED && !depositBDisabled)
          }
          error={!isValid && !!parsedAmounts[Field.CURRENCY_A] && !!parsedAmounts[Field.CURRENCY_B]}
        >
          <Text fontWeight={500}>{errorMessage ? errorMessage : <Trans>Preview</Trans>}</Text>
        </ButtonError>
      </AutoColumn>
    )

  return (
    <div  className='pools_addliquidity'  >
      <ScrollablePage>
        <TransactionConfirmationModal
          isOpen={showConfirm}
          onDismiss={handleDismissConfirmation}
          attemptingTxn={attemptingTxn}
          hash={txHash}
          content={() => (
            <ConfirmationModalContent
              title={<Trans>Add Liquidity</Trans>}
              onDismiss={handleDismissConfirmation}
              topContent={() => (
                <Review
                  parsedAmounts={parsedAmounts}
                  position={position}
                  existingPosition={existingPosition}
                  priceLower={priceLower}
                  priceUpper={priceUpper}
                  outOfRange={outOfRange}
                  ticksAtLimit={ticksAtLimit}
                />
              )}
              bottomContent={() => (
                <ButtonPrimary style={{ marginTop: '1rem' }} onClick={onAdd}>
                  <Text fontWeight={500} fontSize={20}>
                    <Trans>Add</Trans>
                  </Text>
                </ButtonPrimary>
              )}
            />
          )}
          pendingText={pendingText}
        />
        <PageWrapper wide={!hasExistingPosition}>
          <AddRemoveTabs
            creating={false}
            adding={true}
            positionID={tokenId}
            defaultSlippage={DEFAULT_ADD_IN_RANGE_SLIPPAGE_TOLERANCE}
            showBackLink={!hasExistingPosition}
          >
            {!hasExistingPosition && (
              <Row justifyContent="flex-end" style={{ width: 'fit-content', minWidth: 'fit-content' }}>
              </Row>
            )}
          </AddRemoveTabs>
          <Wrapper>
            <ResponsiveTwoColumns wide={!hasExistingPosition}>
              <AutoColumn gap="lg">
                {!hasExistingPosition && (
                  <>
                    <AutoColumn gap="md">
                      <RowBetween paddingBottom="20px">
                        <ThemedText.DeprecatedLabel>
                          <Trans>Select Pair</Trans>
                        </ThemedText.DeprecatedLabel>
                      </RowBetween>
                      <RowBetween>
                        <CurrencyDropdown
                          value={formattedAmounts[Field.CURRENCY_A]}
                          onUserInput={onFieldAInput}
                          hideInput={true}
                          onMax={() => {
                            onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '')
                          }}
                          onCurrencySelect={handleCurrencyASelect}
                          showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                          currency={currencies[Field.CURRENCY_A] ?? null}
                          id="add-liquidity-input-tokena"
                          showCommonBases
                        />

                        <div style={{ width: '12px' }} />

                        <CurrencyDropdown
                          value={formattedAmounts[Field.CURRENCY_B]}
                          hideInput={true}
                          onUserInput={onFieldBInput}
                          onCurrencySelect={handleCurrencyBSelect}
                          onMax={() => {
                            onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                          }}
                          showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                          currency={currencies[Field.CURRENCY_B] ?? null}
                          id="add-liquidity-input-tokenb"
                          showCommonBases
                        />
                      </RowBetween>

                      <FeeSelector
                        disabled={!quoteCurrency || !baseCurrency}
                        feeAmount={feeAmount}
                        handleFeePoolSelect={handleFeePoolSelect}
                        currencyA={baseCurrency ?? undefined}
                        currencyB={quoteCurrency ?? undefined}
                      />
                    </AutoColumn>{' '}
                  </>
                )}
                {hasExistingPosition && existingPosition && (
                  <PositionPreview
                    position={existingPosition}
                    title={<Trans>Selected Range</Trans>}
                    inRange={!outOfRange}
                    ticksAtLimit={ticksAtLimit}
                  />
                )}
              </AutoColumn>
              <div>
                <DynamicSection
                  disabled={tickLower === undefined || tickUpper === undefined || invalidPool || invalidRange}
                >
                  <AutoColumn gap="md">
                    <ThemedText.DeprecatedLabel>
                      {hasExistingPosition ? <Trans>Add more liquidity</Trans> : <Trans>Deposit Amounts</Trans>}
                    </ThemedText.DeprecatedLabel>

                    <CurrencyInputPanel
                      value={formattedAmounts[Field.CURRENCY_A]}
                      onUserInput={onFieldAInput}
                      onMax={() => {
                        onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '')
                      }}
                      showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                      currency={currencies[Field.CURRENCY_A] ?? null}
                      id="add-liquidity-input-tokena"
                      fiatValue={usdcValues[Field.CURRENCY_A]}
                      showCommonBases
                      locked={depositADisabled}
                    />

                    <CurrencyInputPanel
                      value={formattedAmounts[Field.CURRENCY_B]}
                      onUserInput={onFieldBInput}
                      onMax={() => {
                        onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                      }}
                      showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                      fiatValue={usdcValues[Field.CURRENCY_B]}
                      currency={currencies[Field.CURRENCY_B] ?? null}
                      id="add-liquidity-input-tokenb"
                      showCommonBases
                      locked={depositBDisabled}
                    />
                  </AutoColumn>
                </DynamicSection>
              </div>

              {!hasExistingPosition ? (
                <>
                  <HideMedium>
                    <Buttons />
                  </HideMedium>
                  <RightContainer gap="lg">
                    <DynamicSection gap="md" disabled={!feeAmount || invalidPool}>
                      {!noLiquidity ? (
                        <>
                          <RowBetween>
                            <ThemedText.DeprecatedLabel>
                              <Trans>Set Price Range</Trans>
                            </ThemedText.DeprecatedLabel>
                          </RowBetween>

                          {price && baseCurrency && quoteCurrency && !noLiquidity && (
                            <AutoRow gap="4px" justify="center" style={{ marginTop: '0.5rem' }}>
                              <Trans>
                                <ThemedText.DeprecatedMain
                                  fontWeight={500}
                                  textAlign="center"
                                  fontSize={12}
                                  color="text1"
                                >
                                  Current Price:
                                </ThemedText.DeprecatedMain>
                                <ThemedText.DeprecatedBody
                                  fontWeight={500}
                                  textAlign="center"
                                  fontSize={12}
                                  color="text1"
                                >
                                  <HoverInlineText
                                    maxCharacters={20}
                                    text={invertPrice ? price.invert().toSignificant(6) : price.toSignificant(6)}
                                  />
                                </ThemedText.DeprecatedBody>
                                <ThemedText.DeprecatedBody color="text2" fontSize={12}>
                                  {quoteCurrency?.symbol} per {baseCurrency.symbol}
                                </ThemedText.DeprecatedBody>
                              </Trans>
                            </AutoRow>
                          )}

                          <LiquidityChartRangeInput
                            currencyA={baseCurrency ?? undefined}
                            currencyB={quoteCurrency ?? undefined}
                            feeAmount={feeAmount}
                            ticksAtLimit={ticksAtLimit}
                            price={
                              price ? parseFloat((invertPrice ? price.invert() : price).toSignificant(8)) : undefined
                            }
                            priceLower={priceLower}
                            priceUpper={priceUpper}
                            onLeftRangeInput={onLeftRangeInput}
                            onRightRangeInput={onRightRangeInput}
                            interactive={!hasExistingPosition}
                          />
                        </>
                      ) : (
                        <AutoColumn gap="md">
                          <RowBetween>
                            <ThemedText.DeprecatedLabel>
                              <Trans>Set Starting Price</Trans>
                            </ThemedText.DeprecatedLabel>
                          </RowBetween>
                          {noLiquidity && (
                            <BlueCard
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '1rem 1rem',
                              }}
                            >
                              <ThemedText.DeprecatedBody
                                fontSize={14}
                                style={{ fontWeight: 500 }}
                                textAlign="left"
                                color={theme.deprecated_primaryText1}
                              >
                                <Trans>
                                  This pool must be initialized before you can add liquidity. To initialize, select a
                                  starting price for the pool. Then, enter your liquidity price range and deposit
                                  amount. Gas fees will be higher than usual due to the initialization transaction.
                                </Trans>
                              </ThemedText.DeprecatedBody>
                            </BlueCard>
                          )}
                          <OutlineCard padding="12px">
                            <StyledInput
                              className="start-price-input"
                              value={startPriceTypedValue}
                              onUserInput={onStartPriceInput}
                            />
                          </OutlineCard>
                          <RowBetween
                            style={{ backgroundColor: theme.deprecated_bg1, padding: '12px', borderRadius: '12px' }}
                          >
                            <ThemedText.DeprecatedMain>
                              <Trans>Current {baseCurrency?.symbol} Price:</Trans>
                            </ThemedText.DeprecatedMain>
                            <ThemedText.DeprecatedMain>
                              {price ? (
                                <ThemedText.DeprecatedMain>
                                  <RowFixed>
                                    <HoverInlineText
                                      maxCharacters={20}
                                      text={invertPrice ? price?.invert()?.toSignificant(5) : price?.toSignificant(5)}
                                    />{' '}
                                    <span style={{ marginLeft: '4px' }}>{quoteCurrency?.symbol}</span>
                                  </RowFixed>
                                </ThemedText.DeprecatedMain>
                              ) : (
                                '-'
                              )}
                            </ThemedText.DeprecatedMain>
                          </RowBetween>
                        </AutoColumn>
                      )}
                    </DynamicSection>

                    <DynamicSection
                      gap="md"
                      disabled={!feeAmount || invalidPool || (noLiquidity && !startPriceTypedValue)}
                    >
                      <StackedContainer>
                        <StackedItem style={{ opacity: showCapitalEfficiencyWarning ? '0.05' : 1 }}>
                          <AutoColumn gap="md">
                            {noLiquidity && (
                              <RowBetween>
                                <ThemedText.DeprecatedLabel>
                                  <Trans>Set Price Range</Trans>
                                </ThemedText.DeprecatedLabel>
                              </RowBetween>
                            )}
                            <RangeSelector
                              priceLower={priceLower}
                              priceUpper={priceUpper}
                              getDecrementLower={getDecrementLower}
                              getIncrementLower={getIncrementLower}
                              getDecrementUpper={getDecrementUpper}
                              getIncrementUpper={getIncrementUpper}
                              onLeftRangeInput={onLeftRangeInput}
                              onRightRangeInput={onRightRangeInput}
                              currencyA={baseCurrency}
                              currencyB={quoteCurrency}
                              feeAmount={feeAmount}
                              ticksAtLimit={ticksAtLimit}
                            />
                            {!noLiquidity && (
                              <PresetsButtons
                                setFullRange={() => {
                                  setShowCapitalEfficiencyWarning(true)
                                }}
                              />
                            )}
                          </AutoColumn>
                        </StackedItem>

                        {showCapitalEfficiencyWarning && (
                          <StackedItem zIndex={1}>
                            <YellowCard
                              padding="15px"
                              $borderRadius="12px"
                              height="100%"
                              style={{
                                borderColor: theme.deprecated_yellow3,
                                border: '1px solid',
                              }}
                            >
                              <AutoColumn gap="8px" style={{ height: '100%' }}>
                                <RowFixed>
                                  <AlertTriangle stroke={theme.deprecated_yellow3} size="16px" />
                                  <ThemedText.DeprecatedYellow ml="12px" fontSize="15px">
                                    <Trans>Efficiency Comparison</Trans>
                                  </ThemedText.DeprecatedYellow>
                                </RowFixed>
                                <RowFixed>
                                  <ThemedText.DeprecatedYellow ml="12px" fontSize="13px" margin={0} fontWeight={400}>
                                    <Trans>
                                      Full range positions may earn less fees than concentrated positions. Learn more{' '}
                                      <ExternalLink
                                        style={{ color: theme.deprecated_yellow3, textDecoration: 'underline' }}
                                        href={
                                          'https://help.uniswap.org/en/articles/5434296-can-i-provide-liquidity-over-the-full-range-in-v3'
                                        }
                                      >
                                        here
                                      </ExternalLink>
                                      .
                                    </Trans>
                                  </ThemedText.DeprecatedYellow>
                                </RowFixed>
                                <Row>
                                  <ButtonYellow
                                    padding="8px"
                                    marginRight="8px"
                                    $borderRadius="8px"
                                    width="auto"
                                    onClick={() => {
                                      setShowCapitalEfficiencyWarning(false)
                                      getSetFullRange()
                                    }}
                                  >
                                    <ThemedText.DeprecatedBlack fontSize={13} color="black">
                                      <Trans>I understand</Trans>
                                    </ThemedText.DeprecatedBlack>
                                  </ButtonYellow>
                                </Row>
                              </AutoColumn>
                            </YellowCard>
                          </StackedItem>
                        )}
                      </StackedContainer>

                      {outOfRange ? (
                        <YellowCard padding="8px 12px" $borderRadius="12px">
                          <RowBetween>
                            <AlertTriangle stroke={theme.deprecated_yellow3} size="16px" />
                            <ThemedText.DeprecatedYellow ml="12px" fontSize="12px">
                              <Trans>
                                Your position will not earn fees or be used in trades until the market price moves into
                                your range.
                              </Trans>
                            </ThemedText.DeprecatedYellow>
                          </RowBetween>
                        </YellowCard>
                      ) : null}

                      {invalidRange ? (
                        <YellowCard padding="8px 12px" $borderRadius="12px">
                          <RowBetween>
                            <AlertTriangle stroke={theme.deprecated_yellow3} size="16px" />
                            <ThemedText.DeprecatedYellow ml="12px" fontSize="12px">
                              <Trans>Invalid range selected. The min price must be lower than the max price.</Trans>
                            </ThemedText.DeprecatedYellow>
                          </RowBetween>
                        </YellowCard>
                      ) : null}
                    </DynamicSection>

                    <MediumOnly>
                      <Buttons />
                    </MediumOnly>
                  </RightContainer>
                </>
              ) : (
                <Buttons />
              )}
            </ResponsiveTwoColumns>
          </Wrapper>
        </PageWrapper>
        {addIsUnsupported && (
          <UnsupportedCurrencyFooter
            show={addIsUnsupported}
            currencies={[currencies.CURRENCY_A, currencies.CURRENCY_B]}
          />
        )}
      </ScrollablePage>

      <div className="pools-add-your-nfts" >
            <div className="pools-add-your-nfts-text" >
               <LeftOutlined />
               <div className="pools-add-your-nfts-text-Your"  >Your NFTs</div>
               <div className="pools-add-your-nfts-setting"  >
               <img className="pools-add-setting-img" src={setting} alt="" />
              </div>
            </div>

            {/* <div className="flex-center-width-full" >
               <div className="pools-add-your-tokens" >
                  Buy Total:
               </div>
            </div> */}


            <div className="pools-add-your-nft-list" >
               <Radio.Group onChange={e => onChange(e)} style={{ width: "100%" }} >
                  {myNfts.length > 0 ?
                     myNfts.map((item, i) => {
                        return <div key={i} className="pools-add-your-nft-list-item" >
                           <div className="pools-add-your-nft-list-item-img" style={{ backgroundImage: "url(" + item.tokenUrl + ")" }} >
                              <Radio value={item.tokenId}></Radio>
                           </div>

                           <div className="pools-add-your-nft-list-item-name" >
                              <div className="pools-add-your-nft-list-item-name-text">{item.name}</div>
                              <div className="pools-add-your-nft-list-item-id-text" >name #{item.tokenId}</div>
                           </div>
                        </div>
                     })
                     :
                     <div></div>
                  }
               </Radio.Group>
            </div>

            <div className="pools-add-your-nft-cost" >
               TOKEN ID:{poolOrder.tokenId ? '#' + poolOrder.tokenId : ''}
            </div>
            {/* <div className="flex-center-width-full" >
               <div className="pools-add-your-nft-but" >
                 {poolOrder.nftApprove ? <div>TOKEN ID:#{poolOrder.tokenId}</div>:<div onClick={approve721} >Approve</div> }
               </div>
            </div> */}
         </div>

            <div className='flex-all-center' >
            <SwitchLocaleLink />
            </div>

    </div>
  )
}
