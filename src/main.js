// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import routes from './router'
import ElementUI from 'element-ui'
import stores from './store'
import './assets/scss/ele_variables.scss'
Vue.use(Vuex)
Vue.use(Router)
Vue.use(ElementUI)
Vue.config.productionTip = false

let router = new Router({routes}),
	store = new Vuex.Store({stores});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
