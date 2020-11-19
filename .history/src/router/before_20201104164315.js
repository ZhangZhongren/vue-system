import router from '@/router/index'

router.beforeEach((to, from, next) => {
  console.log(from, to)
  if (from.paht === to.path) {
    return
  }
  next()
})
