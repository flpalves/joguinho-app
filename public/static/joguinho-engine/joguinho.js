function setJogo(home, away) {
    jogo = {
        timeHome: {
            placar: 0,
            nome: home.nome,
            jogadores: $.extend(true, [], home.jogadores),
            inicial: $.extend(true, [], home.jogadores),
            cores: {
                principal: home.cor1,
                secundaria: home.cor2
            }
        },
        timeAway: {
            placar: 0,
            nome: away.nome,
            jogadores: $.extend(true, [], away.jogadores),
            inicial: $.extend(true, [], away.jogadores),
            cores: {
                principal: away.cor1,
                secundaria: away.cor2
            }
        },
        posseBola: {
            timeAtk: 'timeHome',
            timeDef: 'timeAway',
            jogador: 5,           //camisa    do jogador com a bola
            posicao : 5,
        },
        tempo: {
            etapa: 1,
            minuto: 0
        },
        encerrado : false,
        stats : {
            'timeHome' : [],
            'timeAway' : [],
        }
    }
    initStats();
    return jogo;
}

function rolaDado() {
    var dado = Math.floor(Math.random() * 6) + 1;
    return dado;
}


function proximaJogada() {
    
    var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
    var jogadorBola = timeBola[jogo.posseBola.jogador];

    if (jogadorBola.camisa == timeBola[0].camisa) {
        // debugger;
        goleiroRepoeBola(jogadorBola);
    } else {
        // jogadorBola.acoes[rolaDado()]();  
        //gamb
        if (typeof jogadorBola.acoes[rolaDado()] === "function") {
            jogadorBola.acoes[rolaDado()]()
        } else {
            window[jogadorBola.acoes[rolaDado()]](); //calling function by string name
        }
        // console.log(jogadorBola.acoes[rolaDado()]);
 
    }

}

function controlaJogo() {

    // while (jogo.tempo.etapa <= 2) {
    
    if (jogo.tempo.etapa <= 2) {

        // jogo.tempo.minuto = 0;
        // for (let minuto = 0; minuto < (45 + randomNumber(4) ); minuto++) {
        // while (jogo.tempo.minuto < (45 + randomNumber(4))) {
        if (jogo.tempo.minuto < (45 + randomNumber(4))) {
            jogo.tempo.minuto++;
            return proximaJogada();
            
            // resetarTime();
        } 
        resetarTime();


        printaAcao('final do ' + jogo.tempo.etapa + ' tempo');
        jogo.tempo.etapa++;
        jogo.tempo.minuto = 0;
        return true;
    }
    printaAcao('Fim de jogo!');
    jogo.encerrado = true;
    printaAcao(jogo.timeHome.nome + ' ' + jogo.timeHome.placar + 'x' + jogo.timeAway.placar + ' ' + jogo.timeAway.nome);

}


// jogo.timeHome.jogadores[3] = 'hue';
// console.table(jogo.timeHome.inicial)
// console.table(jogo.timeHome.jogadores[0].acoes[1]());

// rolaDado();


function printaAcao(jogada) {
    var p = document.createElement('p');
    var texto = document.createTextNode(jogo.tempo.minuto + '" ' + jogada + '('+ jogo.posseBola.posicao +')');
    p.appendChild(texto);
    document.getElementById("result").appendChild(p).setAttribute("style", "background:" + jogo[jogo.posseBola.timeAtk].cores.principal + "; color:" + jogo[jogo.posseBola.timeAtk].cores.secundaria + "; border: 1px solid" + jogo[jogo.posseBola.timeAtk].cores.secundaria + " blue;");
}

function initStats(){
    jogo.timeHome.jogadores.forEach(function(jogador){
        jogo.stats.timeHome.push({
            'corrida' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'toque' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'lancamento' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'drible' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'drible' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'chute' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'cabeceio' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'disputa' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'carrinho' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },      
        })
    });

    jogo.timeAway.jogadores.forEach(function(jogador){
        jogo.stats.timeAway.push({
            'corrida' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'toque' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'lancamento' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'drible' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'drible' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'chute' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'cabeceio' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'disputa' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },
            'carrinho' : {
                'tentativas' : 0,
                'concluidas' : 0,
                'perfeitas'  : 0,
                'falha'      : 0
            },  
        })
    });
} 

function mensuraJogada(time, indexJogador, acao, status){
    jogo.stats[time][indexJogador][acao].tentativas++;
    if(status == 'sucesso'){
        jogo.stats[time][indexJogador][acao].concluidas++;
    }
    if(status == 'perfeita'){
        jogo.stats[time][indexJogador][acao].perfeitas++;
    }
    if(status == 'falha'){
        jogo.stats[time][indexJogador][acao].falha++;
    }
}