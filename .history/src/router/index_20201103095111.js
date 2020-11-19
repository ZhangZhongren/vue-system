import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const modulesFiles = require.context('./modules', true, /\.js$/)


function importAll (r) {
  return r.keys().map(key => {
    console.log(key)
    return key
   
  });
}

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