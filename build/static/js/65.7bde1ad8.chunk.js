(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[65],{1913:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return r}));var r={messages:{Accept:"Aceitar",Acknowledge:"Reconhecer",Allow:"Permitir","Allow in your wallet":"Permitir na sua carteira","Allow {0} first":["Permitir ",["0"]," primeiro"],"Allowance pending":"Provis\xe3o pendente","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Ocorreu um erro ao tentar executar esta troca. Pode ser necess\xe1rio aumentar sua toler\xe2ncia ao deslizamento. Se isso n\xe3o funcionar, pode haver uma incompatibilidade com o token que voc\xea est\xe1 negociando. Nota: a taxa de transfer\xeancia e tokens de rebase s\xe3o incompat\xedveis com Uniswap V3.","Approval pending":"Aprova\xe7\xe3o pendente",Approve:"Aprovar","Approve in your wallet":"Aprove em sua carteira","Approve {0} first":["Aprovar ",["0"]," primeiro"],Auto:"Autom\xe1tico","Auto Router":"Roteador autom\xe1tico",Close:"Fechar","Confirm in your wallet":"Confirme na sua carteira","Confirm swap":"Confirmar troca","Connect wallet":"Conectar-se \xe0 carteira","Connect wallet to swap":"Conecte a carteira para trocar","Connecting\u2026":"Conectando\u2026","Convert {0} to {1}":["Converter ",["0"]," em ",["1"]],"Disconnect wallet":"Desconectar carteira",Dismiss:"Dispensar","Enter an amount":"Digite um valor","Error details":"Detalhes do erro","Error fetching trade":"Erro ao buscar a negocia\xe7\xe3o","Fetching best price\u2026":"Buscando o melhor pre\xe7o\u2026",For:"Para","High price impact":"Impacto de pre\xe7o alto","High slippage":"Deslizamento alto","High slippage increases the risk of price movement":"Alta derrapagem aumenta o risco de movimento de pre\xe7os","I don't have a wallet":"n\xe3o tenho carteira","Insufficient liquidity in the pool for your trade":"Liquidez insuficiente no pool para sua negocia\xe7\xe3o","Insufficient {0} balance":["Saldo insuficiente ",["0"]],"Invalid recipient":"Destinat\xe1rio inv\xe1lido","Liquidity provider fee":"Taxa de provedor de liquidez",Max:"M\xe1x","Max slippage":"Deslizamento m\xe1ximo","Maximum sent":"M\xe1ximo enviado","Minimum received":"M\xednimo recebido","Missing dependencies":"Depend\xeancias ausentes","Mock Toggle":"Alternar Simulado","No results found.":"Nenhum resultado encontrado.","No tokens are available on this network. Please switch to another network.":"Nenhum token est\xe1 dispon\xedvel nesta rede. Por favor, mude para outra rede.",OFF:"DESLIGADO",ON:"SOBRE","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["A sa\xedda \xe9 estimada. Voc\xea receber\xe1 pelo menos ",["0"]," ",["1"]," ou a transa\xe7\xe3o ser\xe1 revertida."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["A sa\xedda \xe9 estimada. Voc\xea enviar\xe1 no m\xe1ximo ",["0"]," ",["1"]," ou a transa\xe7\xe3o ser\xe1 revertida."],"Please enter a valid slippage %":"Insira uma % de derrapagem v\xe1lida","Powered by the Uniswap protocol":"Alimentado pelo protocolo Uniswap","Price impact":"Impacto do pre\xe7o","Price updated":"Pre\xe7o atualizado","Recent transactions":"Transa\xe7\xf5es recentes","Reload the page":"Recarregue a p\xe1gina",Reset:"Redefinir","Review swap":"Troca de revis\xe3o","Search by token name or address":"Pesquisar por nome ou endere\xe7o de token","Select a token":"Selecione um token",Settings:"Configura\xe7\xf5es","Slippage tolerance":"Toler\xe2ncia a discrep\xe2ncias","Something went wrong.":"Algo deu errado.",Swap:"Convers\xe3o","Swap confirmed":"Troca confirmada","Swap details":"Trocar detalhes","Swap failed: {0}":["A troca falhou: ",["0"]],"Swap pending":"Troca pendente","Swap summary":"Resumo da troca","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"A invariante x*y=k do Uniswap n\xe3o foi observada na convers\xe3o. Isto geralmente significa que um dos tokens que voc\xea est\xe1 convertendo tem um comportamento de transfer\xeancia personalizado.","The input token cannot be transferred. There may be an issue with the input token.":"O token lan\xe7ado n\xe3o pode ser transferido. Pode haver um problema com o token lan\xe7ado.","The output token cannot be transferred. There may be an issue with the output token.":"O token resultante n\xe3o pode ser transferido. Pode haver um problema com o token resultante.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"O token de sa\xedda n\xe3o pode ser transferido. Pode haver um problema com o token de sa\xedda. Nota: a taxa de transfer\xeancia e tokens de rebase s\xe3o incompat\xedveis com Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"A opera\xe7\xe3o n\xe3o pode ser enviada ap\xf3s a data-limite. Confirme se a data-limite da opera\xe7\xe3o n\xe3o \xe9 cedo demais.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Esta transa\xe7\xe3o n\xe3o ter\xe1 sucesso devido ao movimento do pre\xe7o. Tente aumentar sua toler\xe2ncia ao deslizamento. Nota: a taxa de transfer\xeancia e tokens de rebase s\xe3o incompat\xedveis com Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Esta opera\xe7\xe3o n\xe3o ser\xe1 realizada, devido \xe0s altera\xe7\xf5es nos pre\xe7os ou \xe0 taxa de transfer\xeancia. Tente aumentar sua toler\xe2ncia a discrep\xe2ncias.","Transaction confirmed":"Transa\xe7\xe3o confirmada","Transaction deadline":"Data-limite da opera\xe7\xe3o","Transaction pending":"Transa\xe7\xe3o pendente","Transaction rejected.":"Transa\xe7\xe3o rejeitada.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Tente aumentar sua toler\xe2ncia ao deslizamento.<0/>NOTA: A taxa de transfer\xeancia e os tokens de rebase s\xe3o incompat\xedveis com o Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"Erro inesperado. N\xe3o foi poss\xedvel estimar o g\xe1s para a troca.","Unexpected issue with estimating the gas. Please try again.":"Problema inesperado com a estimativa do g\xe1s. Por favor, tente novamente.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Erro desconhecido",["0"],". Tente aumentar sua toler\xe2ncia ao deslizamento. Nota: a taxa de transfer\xeancia e tokens de rebase s\xe3o incompat\xedveis com Uniswap V3."],"Unsupported network - switch to another to trade":"Rede n\xe3o suportada - mude para outra para negociar","Unwrap confirmed":"Desembrulhar confirmado","Unwrap pending":"Desempacotar pendente","Unwrap {0}":["Desembrulhar ",["0"]],"View on Etherscan":"Ver no Etherscan","Wrap confirmed":"Envelopamento confirmado","Wrap pending":"Encerramento pendente","Wrap {0}":["Envolt\xf3rio ",["0"]],"Your transaction will revert if it has been pending for longer than this period of time.":"Sua transa\xe7\xe3o ser\xe1 revertida se estiver pendente por mais tempo que esse per\xedodo.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Sua opera\xe7\xe3o ser\xe1 revertida se o pre\xe7o sofrer altera\xe7\xe3o desfavor\xe1vel acima deste percentual.",minutes:"Minutos","{caption}":[["caption"]],"{integrator} fee":[["integrator"]," taxa"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"segundos"]}}}}]);
//# sourceMappingURL=65.7bde1ad8.chunk.js.map