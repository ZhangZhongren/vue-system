import router from '@/router/index'

router.beforeEach((to, from, next) => {
  console.log(from, to)
  next()
})
