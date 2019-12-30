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
        localStorage.setItem('clubeHome', state.ClubHome);
    },
    saveClubAway(state, payload){
        state.ClubAway = payload;
        localStorage.setItem('clubeAway', state.ClubAway);

    },
    saveClubGameHome(state, payload){
        state.ClubGameHome = payload;
        localStorage.setItem('clubeGameHome', state.ClubGameHome);
    },
    saveClubGameAway(state, payload){
        state.ClubGameAway = payload;
        localStorage.setItem('clubeGameAway', state.ClubGameAway);
    }
  },
  actions: {

  }
})
