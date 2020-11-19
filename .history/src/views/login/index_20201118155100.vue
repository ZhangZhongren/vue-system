<template>
  <div class="login-container">
    <div class="form">
      <DragVerification @success="verifySuccess" />
    </div>
  </div>
</template>

<script>
import jsCookie from 'js-cookie'

export default {
  name: 'login',
  data() {
    return {
    }
  },
  methods: {
    verifySuccess() {
      jsCookie.set('token', 'logined')
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: #368;
  padding-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 500px;
    height: max-content;
    padding: 40px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: -100px;
  }
}
</style>
