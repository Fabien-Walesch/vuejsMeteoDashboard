import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: require ('./homePage.vue')
  },{
    path:'/contact',
    components: require ('./contactPage.vue')
  },{
    path:'/credits',
    components: require ('./creditPage.vue')
  },{
    path : '*',
    redirect:'/'
  }]
})

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
