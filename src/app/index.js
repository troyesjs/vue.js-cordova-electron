// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { getPlatform } from '../lib/platform'

function init() {
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
}

if (process.env.TARGET === 'cordova') {
  document.addEventListener("deviceready", () => init(), false)
} else {
  init()
}

