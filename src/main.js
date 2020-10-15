import Vue from 'vue'
import App from './App.vue'
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, { key: 'AIzaSyBfecyrv-0upiR2oGIb2d06ujsRSCrHYaw', libraries: ['places'] })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
