import '@/components/SvgIcon/index'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

// console.log(requireAll(req))
// export default requireAll(req)
// generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it
