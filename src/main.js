import Vue from 'Vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'

Vue.use(VRouter)

let router = new VRouter({
  mode:'history',
  router: [
    {
      path: '/apple',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})


new Vue({
  el:'#app',
  router,
  template:'<App/>',
  component:{App}
})