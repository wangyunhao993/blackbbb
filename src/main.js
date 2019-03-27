import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// use
Vue.use(VueRouter)
// 全局样式
import './assets/statics/site/css/style.css'
Vue.config.productionTip = false

// 导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
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
  }
]

let router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
