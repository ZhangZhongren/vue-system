<template>
  <div class="login-container">
    <div class="form">
      <el-form :model="form" label-position="left" label-width="80px">
        <el-form-item label="用户名">
          <el-input />
        </el-form-item>
        <el-form-item label="密码" type="password">
          <el-input />
        </el-form-item>
      </el-form>
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
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    verifySuccess() {
      jsCookie.set('token', 'logined')
      this.$router.push({ path: '/' })
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
    width: 400px;
    height: max-content;
    padding: 40px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: -100px;
  }
}
</style>
