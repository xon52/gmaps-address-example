import Vue from 'vue'
import App from './App.vue'
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, { key: 'AIzaSyCL0RSk2kEqUA7I81aaTFpjLC-v8-Ai5xM', libraries: ['places'] })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
