import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ClubHome : {},
    ClubAway : {},
  },
  mutations: {
    saveClubHome(state, payload){
        state.ClubHome = payload;
    },
    saveClubAway(state, payload){
        state.ClubAway = payload;
    }
  },
  actions: {

  }
})
