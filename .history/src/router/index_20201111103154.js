import Vue from 'vue'
import Router from 'vue-router'
import _import from './_import'
Vue.use(Router)
const modulesFiles = require.context('./modules', true, /\.js$/)

// 利用 require.context 获取 文件内容 数组 形式
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules.push(value.default)
  return modules
}, [])

// console.log(modules.flat(1))

export default new Router({
  routes: modules.flat(1).concat([
    {
      path: '/layout',
      components: {
        default: _import('layout/layer')
      }
    }
  ])
})

export const ROUTERS = modules.flat(1)
