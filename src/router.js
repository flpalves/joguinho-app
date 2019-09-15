import Vue from 'vue'
import Router from 'vue-router'
import Match from './views/Match.vue'
import PreMatch from './views/PreMatch.vue'
import GameDay from './views/GameDay.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PreMatch
    },
    {
      path: '/match',
      name: 'match',
      component: Match
    },
    {
      path: '/game-day',
      name: 'gameDay',
      component: GameDay
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
 