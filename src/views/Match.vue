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
    name: 'match',
    components: {
        
    },
    mounted(){
        this.getListaClubes();
    },
    methods : {
         
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
