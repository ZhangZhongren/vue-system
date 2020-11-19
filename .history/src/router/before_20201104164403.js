import router from '@/router/index'

router.beforeEach((to, from, next) => {
  console.log(from.path, to.path)
  if (from.paht === to.path) {
    return
  }
  next()
})
