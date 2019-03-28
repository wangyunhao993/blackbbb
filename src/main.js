import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// use
Vue.use(VueRouter)
// 全局样式
import './assets/statics/site/css/style.css'
Vue.config.productionTip = false

// 同意设置axios和设置基地址
import axios from 'axios'
Vue.prototype.$axios=axios

axios.defaults.baseURL = 'http://111.230.232.110:8899/'

// 导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
// 规则
let routes =[
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

let router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
