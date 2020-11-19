import router from '@/router/index'
import jsCookie from 'js-cookie'
router.beforeEach((to, from, next) => {
  if (jsCookie.get('token')) {
    console.log(jsCookie.get('token'), '9000')
    next('/login')
  }
  next()
})
