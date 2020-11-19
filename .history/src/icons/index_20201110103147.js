import Vue from 'vue'
/** eslint-disable */
import SvgIcon from '@/components/SvgIcon' // svg组件

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
console.log(requireAll(req)
)
// generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it
