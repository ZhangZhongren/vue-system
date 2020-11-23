import router from '@/router/index'
import jsCookie from 'js-cookie'
router.beforeEach((to, from, next) => {
  if (jsCookie.get('token') || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})
