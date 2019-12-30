<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Game Day!</h1>
        <p>Escale os times</p>
      </b-col>
    </b-row>
    <b-row>
        <!-- <b-col md="3">
            <h2>Jogadores</h2>
            <draggable v-model="homePlayers">
                <transition-group class="list-group">
                    <div v-for="element in this.clubHomeJogadores" :key="element.nome" class="list-group-item">
                        {{element.nome}}
                    </div>
                </transition-group>
            </draggable>
        </b-col> -->
        
    </b-row>
    <div class="row">
        <div class="col">
            <h2>{{clubHome.time}}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-6">
            <h4>Em Campo</h4>
            <draggable class="list-group" :list="start11Home" group="homePlayers">
                <div
                    class="list-group-item"
                    v-for="(element, index) in start11Home"
                    :key="element.nome"
                >
                    {{ element.nome }} <strong>{{ index + 1}}</strong>
                </div>
            </draggable>
        </div>

        <div class="col-md-3 col-6">
            <h4>Banco</h4>
            
            <draggable class="list-group" :list="this.clubHomeJogadores" group="homePlayers" :move="checkMoveHome">
                <div v-for="element in this.clubHomeJogadores" :key="element.nome" class="list-group-item">
                    {{element.nome}}
                </div>
            </draggable>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <hr class="mt-3">
            <h2 class="mt-3">{{clubAway.time}}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-6">
            <h4>Em Campo</h4>
            <draggable class="list-group" :list="start11Away" group="awayPlayers">
                <div
                    class="list-group-item"
                    v-for="(element, index) in start11Away"
                    :key="element.nome"
                >
                    {{ element.nome }} <strong>{{ index + 1}}</strong>
                </div>
            </draggable>
        </div>
        <div class="col-md-3 col-6">
            <h4>Banco</h4>
            <draggable class="list-group" :list="this.clubAwayJogadores" group="awayPlayers" :move="checkMoveAway">
                <div v-for="element in this.clubAwayJogadores" :key="element.nome" class="list-group-item">
                    {{element.nome}}
                </div>
            </draggable>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <button class="btn btn-primary btn-block" @click="this.goToMatch" v-if="this.start11Home.length == 11 && this.start11Away.length == 11">Ir para o jogo</button>
        </div>
    </div>
  </b-container>
</template> 

<script>
import draggable from "vuedraggable";
export default {
    name: "GameDay",
    components: {
        draggable
    },
    mounted() {
        
    },
    methods: {
        checkMoveHome: function(e) {
            if(this.start11Home.length > 10){
                console.log('cancelado!');
                return false;
            }
        },
        checkMoveAway: function(e) {
            if(this.start11Away.length > 10){
                console.log('cancelado!');
                return false;
            }
        },
        goToMatch: function(){
            var posicoesPorJogador = [1,1,2,3,3,4,5,6,6,7,8];
            this.start11Home.map( (jogador, index) => {
                jogador.camisa = index+1;
                jogador.posicao = posicoesPorJogador[index];
                jogador.time = 'timeHome';
                jogador.acoes = {
                    '1' : jogador[1],
                    '2' : jogador[2],
                    '3' : jogador[3],
                    '4' : jogador[4],
                    '5' : jogador[5],
                    '6' : jogador[6]
                };
                jogador.habilidades = {
                    "forca" : jogador.forca,
                    "toque" : jogador.toque,
                    "lancamento" : jogador.lancamento,
                    "chute" : jogador.chute,
                    "drible" : jogador.drible,
                    "carrinho" : jogador.carrinho,
                    "corrida" : jogador.corrida,
                    "jogoAereo" : jogador.jogoAereo,
                    "penalti": jogador.penalti,
                    "posicionamento" : jogador.posicionamento,
                    "defende" : jogador.defende,
                    "espalma" : jogador.espalma,
                    "espalmaFora" : jogador.espalmaFora,
                    "reposicao" : jogador.reposicao
                }

            });
            this.start11Away.map( (jogador, index) => {
                jogador.camisa = index+1;
                jogador.posicao = posicoesPorJogador[index];
                jogador.time = 'timeAway';
                jogador.acoes = {
                    '1' : jogador[1],
                    '2' : jogador[2],
                    '3' : jogador[3],
                    '4' : jogador[4],
                    '5' : jogador[5],
                    '6' : jogador[6]
                };
                jogador.habilidades = {
                    "forca" : jogador.forca,
                    "toque" : jogador.toque,
                    "lancamento" : jogador.lancamento,
                    "chute" : jogador.chute,
                    "drible" : jogador.drible,
                    "carrinho" : jogador.carrinho,
                    "corrida" : jogador.corrida,
                    "jogoAereo" : jogador.jogoAereo,
                    "penalti": jogador.penalti,
                    "posicionamento" : jogador.posicionamento,
                    "defende" : jogador.defende,
                    "espalma" : jogador.espalma,
                    "espalmaFora" : jogador.espalmaFora,
                    "reposicao" : jogador.reposicao
                }
            });
            var clubGameHome = {
                "nome" : this.clubHome.time,
                "cor1" : this.clubHome.cor1,
                "cor2" : this.clubHome.cor2,
                "jogadores" : this.start11Home
            };
            var clubGameAway = {
                "nome" : this.clubAway.time,
                "cor1" : this.clubAway.cor1,
                "cor2" : this.clubAway.cor2,
                "jogadores" : this.start11Away
            }
            console.log('go to match');

            this.$store.commit('saveClubGameHome', clubGameHome);
            this.$store.commit('saveClubGameAway', clubGameAway);
            this.$router.push('/match');
        }
    },
    
    computed: {
        clubHomeJogadores(){
            return this.$store.state.ClubHome.jogadores
        },
        clubHome(){
            return this.$store.state.ClubHome
        },
        clubAwayJogadores(){
            return this.$store.state.ClubAway.jogadores
        },
        clubAway(){
            return this.$store.state.ClubAway
        },
    },
    data: function() {
        return {
            start11Home : [],
            start11Away : [],
        };
    }
};
</script>
