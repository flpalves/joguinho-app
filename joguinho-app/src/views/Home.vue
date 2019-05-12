<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Joguinho</h1>
            </b-col> 
        </b-row>
        <b-row>
            <b-col md="3">
                <select v-model="timeHome" class="form-control">
                    <option @key="time.id" v-for="time in times" :value="time.nome">{{time.nomeCompleto}}</option>
                </select>
            </b-col>
            <b-col md="6">
                <button class="btn btn-secondary btn-block" @click="this.getClubes" >Carregar Time</button>
            </b-col>
            <b-col md="3">
                <select v-model="timeAway" class="form-control">
                    <option @key="time.id" v-for="time in times" :value="time.nome">{{time.nomeCompleto}}</option>
                </select>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="3">
                <ul class="list-group list-group-flush"> 
                    <li class="list-group-item" v-for="jogador in jogadoresHome">{{jogador.camisa}}-{{jogador.nome}}</li>
                </ul>
            </b-col>
            <b-col md="6">
                 
            </b-col>
            <b-col md="3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="jogador in jogadoresAway">{{jogador.camisa}}-{{jogador.nome}}</li>
                </ul>
            </b-col>
        </b-row> 
        <b-row>
            <b-col>
                <hr />
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
                .get(`/static/clubes/${this.timeHome}.json`)
                .then(response => {
                    this.jogadoresHome = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        getClubeAway : function(){
            axios
                .get(`/static/clubes/${this.timeAway}.json`)
                .then(response => {
                    this.jogadoresAway = response.data 
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
        }
    },
    data: function(){
        return {
            times : {},
            timeHome : '',
            timeAway : '',
            jogadoresHome : [],
            jogadoresAway : [],
        }
    }
}
</script>
