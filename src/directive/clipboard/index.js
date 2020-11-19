import Clipboard from './clipboard'
const install = function(Vue) {
  Vue.directive('Clipboard', Clipboard)
}
if (window.Vue) {
  window.clipboard = Clipboard
  Vue.use(install) // eslint-disable-line
}
Clipboard.install = install
export default Clipboard
import Vue from 'vue'
Vue.directive('Clipboard', Clipboard)
