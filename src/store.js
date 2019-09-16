import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ClubHome : {},
    ClubAway : {},
    ClubGameHome : {},
    clubGameAway : {},
  },
  mutations: {
    saveClubHome(state, payload){
        state.ClubHome = payload;
    },
    saveClubAway(state, payload){
        state.ClubAway = payload;
    },
    saveClubGameHome(state, payload){
        state.ClubGameHome = payload;
    },
    saveClubGameAway(state, payload){
        state.clubGameAway = payload;
    }
  },
  actions: {

  }
})
