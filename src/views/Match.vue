<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Joguinho</h1>
                
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
                <p class="placar">{{ClubGameHome.nome}} {{placarHome}} x {{placarAway}} {{ClubGameAway.nome}}</p>
                <button v-if="ClubGameHome.nome && ClubGameAway.nome" class="btn btn-primary" @click="startGame()">Começa</button>
            </b-col>
        </b-row>
    </b-container>
</template> 

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

const axios = require('axios');

export default {
    name: 'match',
    components: {
        
    },
    mounted(){
        // this.getListaClubes();
    },
    methods : {
         
        startGame : function(){
            // debugger;
            var match = window.setJogo(this.ClubGameHome, this.ClubGameAway);
            window.jTimeHome = this.ClubGameHome.jogadores;
            window.jTimeAway = this.ClubGameAway.jogadores;
            
            var interval = setInterval(foo, 2000);
            function foo() {
                if (jogo.encerrado){
                    clearInterval(interval);
                }    
                window.controlaJogo();   
            }

        }
    },
    computed: {
        ClubGameHome(){
            if(localStorage.getItem('ClubGameHome')){
                return localStorage.getItem('ClubGameHome')
            }
            return this.$store.state.ClubGameHome
        },
        ClubGameAway(){
            if(localStorage.getItem('ClubGameAway')){
                return localStorage.getItem('ClubGameAway')
            }
            return this.$store.state.ClubGameAway
        },
        placarHome(){
            if(typeof jogo !== 'undefined'){
                return jogo.timeHome.placar;
            } 
            return 0
            
        },
        placarAway(){
            if(typeof jogo !== 'undefined'){
                return jogo.timeAway.placar;
            } 
            return 0
        }
    },
    data: function(){
        return {
            times : {},
            nomeTimeHome : '',
            nomeTimeAway : '',
            timeHome : this.$store.state.ClubGameHome,
            timeAway : this.$store.state.ClubGameAway
        }
    }
}
</script>
<style lang="css">
    .placar{
        display: block;
        background:#FFF;
        color:#000;
    }
</style>