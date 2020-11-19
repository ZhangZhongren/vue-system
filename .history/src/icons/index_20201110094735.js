import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件
// import generateIconsView from '@/views/svg-icons/generateIconsView.js'// just for @/views/icons , you can delete it

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
console.log(requireAll(req)
)
// generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it
