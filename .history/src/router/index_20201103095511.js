import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const modulesFiles = require.context('./modules', true, /\.js$/)

// 利用 require.context 获取文件名称
const importAll = r => r.keys().map(key => key)
console.log(importAll(modulesFiles))

// 利用 require.context 获取 文件内容
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

console.log(modules.keys())

export default new Router({
  routes: []
})