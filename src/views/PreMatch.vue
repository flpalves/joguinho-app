<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Escolha os times</h1>
            </b-col> 
        </b-row>
        <b-row>
            <b-col md="3">
                <select v-model="idHomeClub" class="form-control">
                    <option @key="time.id" :id="time.id" v-for="time in clubs" :value="time.id">{{time.time}}</option>
                </select>
            </b-col>
            <b-col md="6">
                <button class="btn btn-secondary btn-block" @click="this.fillClubs">Carregar Time</button>
            </b-col>
            <b-col md="3">
                <select v-model="idAwayClub" class="form-control">
                    <option @key="time.id" :id="time.id" v-for="time in clubs" :value="time.id">{{time.time}}</option>
                </select>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <button class="btn btn-primary btn-block mt-5" @click="this.goToGameDay" v-if="this.timeHome.id && this.timeAway.id">Ir para vestiários</button>
            </b-col> 
        </b-row>
    </b-container>
</template>
<script> 

const axios = require('axios');
    
export default {
    name: 'PreMatch',
    components: {
        
    },
    mounted(){
        this.getListaClubes();
        this.getJogadores();
    },
    methods : {

        fillClubById: function(clubId){
            var clubObj = this.clubs.find(function(club){
                return club.id === clubId;
            });
            clubObj.jogadores = this.filterPlayersByClubId(clubObj.id);
            console.log(clubObj);
            return clubObj;
        },

        filterPlayersByClubId : function(clubId){
            return this.jogadores.filter(function(player){
                return player.clube_id === clubId
            });
        },

        getListaClubes : function(){
            axios
            .get('/static/listaClubes.json')
            .then(response => {
                this.clubs = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        },

        getJogadores : function(){
            axios
            .get('/static/listaJogadores.json')
            .then(response => {
                this.jogadores = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        },

        fillClubs: function(){ 
            this.timeHome = this.fillClubById(this.idHomeClub);
            this.timeAway = this.fillClubById(this.idAwayClub);
        },
        goToGameDay : function(){
            this.$store.commit('saveClubHome', this.timeHome);
            this.$store.commit('saveClubAway', this.timeAway);

            this.$router.push('/game-day');
        }
    },
    data: function(){
        return {
            clubs : {},
            idHomeClub : '',
            idAwayClub : '',
            timeHome : {},
            timeAway : {}, 
            jogadores : []
        }
    }
}
</script>
