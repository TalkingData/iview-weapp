import Vue from 'vue'
import App from './index'
import '../../components/panel/style/css'
import '../../components/cell-group/style/css'
import '../../components/cell/style/css'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
