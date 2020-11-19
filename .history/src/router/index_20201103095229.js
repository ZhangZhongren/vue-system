import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const modulesFiles = require.context('./modules', true, /\.js$/)


const importAll = r => r.keys().map(key => key)

console.log(importAll(modulesFiles), '000')


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