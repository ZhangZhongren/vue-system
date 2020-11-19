import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const modulesFiles = require.context('./modules', true, /\.js$/)
// const requireAll = requireContext => requireContext.keys().map(requireContext)

// function importAll (r) {
//   r.keys().forEach(key => {
//     console.log(key)
//   });
// }

// importAll(MY_ROUTERS)

// console.log(requireAll(MY_ROUTERS))

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

console.log(modules)

export default new Router({
  routes: []
})