(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[63],{1911:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i}));var i={messages:{Accept:"Zaakceptuj",Acknowledge:"Uznawa\u0107",Allow:"Dopuszcza\u0107","Allow in your wallet":"Pozw\xf3l w swoim portfelu","Allow {0} first":["Zezw\xf3l najpierw na ",["0"]],"Allowance pending":"Oczekiwanie na zasi\u0142ek","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Wyst\u0105pi\u0142 b\u0142\u0105d podczas pr\xf3by wykonania tej wymiany. Mo\u017ce by\u0107 konieczne zwi\u0119kszenie tolerancji na po\u015blizg. Je\u015bli to nie zadzia\u0142a, mo\u017ce wyst\u0119powa\u0107 niezgodno\u015b\u0107 z tokenem, kt\xf3rym handlujesz. Uwaga: op\u0142ata za transfer i rebase tokeny s\u0105 niezgodne z Uniswap V3.","Approval pending":"Oczekuje na zatwierdzenie",Approve:"Zatwierd\u017a","Approve in your wallet":"Zatwierd\u017a w swoim portfelu","Approve {0} first":["Najpierw zatwierd\u017a ",["0"]],Auto:"Auto","Auto Router":"Automatyczny router",Close:"Zamknij","Confirm in your wallet":"Potwierd\u017a w swoim portfelu","Confirm swap":"Potwierd\u017a zamian\u0119","Connect wallet":"Po\u0142\u0105cz portfel","Connect wallet to swap":"Pod\u0142\u0105cz portfel, aby zamieni\u0107","Connecting\u2026":"\u0141\u0105czenie\u2026","Convert {0} to {1}":["Konwertuj ",["0"]," na ",["1"]],"Disconnect wallet":"Od\u0142\u0105cz portfel",Dismiss:"Odrzu\u0107","Enter an amount":"Wprowad\u017a kwot\u0119","Error details":"Szczeg\xf3\u0142y b\u0142\u0119du","Error fetching trade":"B\u0142\u0105d podczas pobierania transakcji","Fetching best price\u2026":"Pobieranie najlepszej ceny\u2026",For:"Dla","High price impact":"Wysoki wp\u0142yw na cen\u0119","High slippage":"Wysoki po\u015blizg","High slippage increases the risk of price movement":"Wysoki po\u015blizg zwi\u0119ksza ryzyko zmiany ceny","I don't have a wallet":"nie mam portfela","Insufficient liquidity in the pool for your trade":"Niewystarczaj\u0105ca p\u0142ynno\u015b\u0107 w puli dla Twojej transakcji","Insufficient {0} balance":["Niewystarczaj\u0105ce saldo ",["0"]],"Invalid recipient":"Nieprawid\u0142owy odbiorca","Liquidity provider fee":"Op\u0142ata dostawcy p\u0142ynno\u015bci",Max:"Maks.","Max slippage":"Maksymalny po\u015blizg","Maximum sent":"Maksymalna wys\u0142ana","Minimum received":"Otrzymane minimum","Missing dependencies":"Brakuj\u0105ce zale\u017cno\u015bci","Mock Toggle":"Prze\u0142\u0105czanie pozor\xf3w","No results found.":"Nie znaleziono wynik\xf3w.","No tokens are available on this network. Please switch to another network.":"W tej sieci nie s\u0105 dost\u0119pne \u017cadne tokeny. Prze\u0142\u0105cz si\u0119 na inn\u0105 sie\u0107.",OFF:"POZA",ON:"NA","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["Produkcja jest szacowana. Otrzymasz co najmniej ",["0"]," ",["1"]," lub transakcja zostanie cofni\u0119ta."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["Produkcja jest szacowana. Wy\u015blesz maksymalnie ",["0"]," ",["1"]," lub transakcja zostanie cofni\u0119ta."],"Please enter a valid slippage %":"Prosz\u0119 poda\u0107 poprawny % po\u015blizgu","Powered by the Uniswap protocol":"Obs\u0142ugiwany przez protok\xf3\u0142 Uniswap","Price impact":"Wp\u0142yw na cen\u0119","Price updated":"Zaktualizowano cen\u0119","Recent transactions":"Ostatnie tranzakcje","Reload the page":"Od\u015bwie\u017c stron\u0119",Reset:"Resetowanie","Review swap":"Przejrzyj zamian\u0119","Search by token name or address":"Szukaj wed\u0142ug nazwy tokena lub adresu","Select a token":"Wybierz token",Settings:"Ustawienia","Slippage tolerance":"Tolerancja po\u015blizgu","Something went wrong.":"Co\u015b posz\u0142o nie tak.",Swap:"Zamie\u0144","Swap confirmed":"Zamiana potwierdzona","Swap details":"Zamie\u0144 szczeg\xf3\u0142y","Swap failed: {0}":["Zamiana nie powiod\u0142a si\u0119: ",["0"]],"Swap pending":"Zamiana w toku","Swap summary":"Podsumowanie wymiany","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Niezmiennik Uniswap x * y = k nie zosta\u0142 spe\u0142niony przez zamian\u0119. Zwykle oznacza to, \u017ce jeden z wymienianych token\xf3w ma niestandardowe zachowanie podczas transferu.","The input token cannot be transferred. There may be an issue with the input token.":"Nie mo\u017cna przenie\u015b\u0107 tokena wej\u015bciowego. By\u0107 mo\u017ce wyst\u0105pi\u0142 problem z tokenem wej\u015bciowym.","The output token cannot be transferred. There may be an issue with the output token.":"Nie mo\u017cna przenie\u015b\u0107 tokenu wyj\u015bciowego. Mo\u017ce wyst\u0105pi\u0107 problem z tokenem wyj\u015bciowym.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Nie mo\u017cna przenie\u015b\u0107 tokena wyj\u015bciowego. Mo\u017ce wyst\u0119powa\u0107 problem z tokenem wyj\u015bciowym. Uwaga: op\u0142ata za transfer i rebase tokeny s\u0105 niezgodne z Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"Nie mo\u017cna wys\u0142a\u0107 transakcji, poniewa\u017c up\u0142yn\u0105\u0142 termin. Sprawd\u017a, czy termin transakcji nie jest zbyt kr\xf3tki.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Ta transakcja nie powiedzie si\u0119 z powodu ruchu cen. Spr\xf3buj zwi\u0119kszy\u0107 swoj\u0105 tolerancj\u0119 na po\u015blizg. Uwaga: op\u0142ata za transfer i rebase tokeny s\u0105 niezgodne z Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Ta transakcja nie powiedzie si\u0119 ze wzgl\u0119du na ruch cen lub op\u0142at\u0119 za transfer. Spr\xf3buj zwi\u0119kszy\u0107 tolerancj\u0119 na po\u015blizg.","Transaction confirmed":"Transakcja potwierdzona","Transaction deadline":"Termin transakcji","Transaction pending":"Transakcja w toku","Transaction rejected.":"Transakcja odrzucona.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Spr\xf3buj zwi\u0119kszy\u0107 swoj\u0105 tolerancj\u0119 na po\u015blizg.<0/>UWAGA: Op\u0142ata za transfer i tokeny rebase s\u0105 niezgodne z Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"Niespodziewany b\u0142\u0105d. Nie uda\u0142o si\u0119 oszacowa\u0107 gazu do wymiany.","Unexpected issue with estimating the gas. Please try again.":"Nieoczekiwany problem z szacowaniem gazu. Prosz\u0119 spr\xf3buj ponownie.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Nieznany b\u0142\u0105d",["0"],". Spr\xf3buj zwi\u0119kszy\u0107 swoj\u0105 tolerancj\u0119 na po\u015blizg. Uwaga: op\u0142ata za transfer i rebase tokeny s\u0105 niezgodne z Uniswap V3."],"Unsupported network - switch to another to trade":"Nieobs\u0142ugiwana sie\u0107 - prze\u0142\u0105cz si\u0119 na inn\u0105, aby handlowa\u0107","Unwrap confirmed":"Potwierdzone rozpakowanie","Unwrap pending":"Oczekiwanie na rozpakowanie","Unwrap {0}":["Rozpakuj ",["0"]],"View on Etherscan":"Zobacz na Etherscan","Wrap confirmed":"Zawini\u0119cie potwierdzone","Wrap pending":"Oczekiwanie na zawijanie","Wrap {0}":["Zawijaj ",["0"]],"Your transaction will revert if it has been pending for longer than this period of time.":"Twoja transakcja zostanie cofni\u0119ta, je\u015bli by\u0142a w toku d\u0142u\u017cej ni\u017c ten okres.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Twoja transakcja zostanie przywr\xf3cona, je\u015bli cena zmieni si\u0119 niekorzystnie o wi\u0119cej ni\u017c ten procent.",minutes:"minuty","{caption}":[["caption"]],"{integrator} fee":[["integrator"]," op\u0142at"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"]]}}}}]);
//# sourceMappingURL=63.9b6bfda5.chunk.js.map