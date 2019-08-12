<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Joguinho</h1>
            </b-col> 
        </b-row>
        <b-row>
            <b-col md="3">
                <select v-model="nomeTimeHome" class="form-control">
                    <option @key="time.id" v-for="time in times" :value="time.nome">{{time.nomeCompleto}}</option>
                </select>
            </b-col>
            <b-col md="6">
                <button class="btn btn-secondary btn-block" @click="this.getClubes" >Carregar Time</button>
            </b-col>
            <b-col md="3">
                <select v-model="nomeTimeAway" class="form-control">
                    <option @key="time.id" v-for="time in times" :value="time.nome">{{time.nomeCompleto}}</option>
                </select>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="3">
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item" v-for="jogador in timeHome.jogadores">{{jogador.camisa}}-{{jogador.nome}}</li>
                </ul>
            </b-col>
            <b-col md="6">
                 
            </b-col>
            <b-col md="3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="jogador in timeAway.jogadores">{{jogador.camisa}}-{{jogador.nome}}</li>
                </ul>
            </b-col>
        </b-row> 
        <b-row>
            <b-col>
                <hr /> 
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12">
                <div id="result"></div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12">
                <button v-if="timeHome.nome && timeAway.nome" class="btn btn-primary" @click="startGame()">Começa</button>
            </b-col>
        </b-row>
    </b-container>
</template> 

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

const axios = require('axios');

export default {
    name: 'home',
    components: {
        
    },
    mounted(){
        this.getListaClubes();
    },
    methods : {
        getListaClubes : function(){
            axios
                .get('/static/listaClubes.json')
                .then(response => {
                    this.times = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        getClubeHome : function(){
            axios
                .get(`/static/clubes/${this.nomeTimeHome}.json`)
                .then(response => {
                    
                    response.data.jogadores = response.data.jogadores.map(function(jogador){
                        jogador.time = "timeHome";
                        return jogador
                    });
                    this.timeHome = response.data 
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        getClubeAway : function(){
            axios
                .get(`/static/clubes/${this.nomeTimeAway}.json`)
                .then(response => {
                    
                    response.data.jogadores = response.data.jogadores.map(function(jogador){
                        jogador.time = "timeAway";
                        return jogador
                    });
                    this.timeAway = response.data 

                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        getClubes : function(){            
            
            this.getClubeHome(); 
            this.getClubeAway();
        },
        startGame : function(){

            var match = window.setJogo(this.timeHome, this.timeAway);
            window.jTimeHome = this.timeHome.jogadores;
            window.jTimeAway = this.timeAway.jogadores;
            
            var interval = setInterval(foo, 1000);
            function foo() {
                if (jogo.encerrado){
                    clearInterval(interval);
                }    
                window.controlaJogo();   
            }

        }
    },
    data: function(){
        return {
            times : {},
            nomeTimeHome : '',
            nomeTimeAway : '',
            timeHome : {},
            timeAway : {},
        }
    }
}
</script>
