<template>
  <div class="login-container">
    <div class="form">
      <el-form :model="form">
        <el-form-item>
          <el-input>
            <i slot="prepend" class="el-icon-s-custom" />
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" />
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
  /deep/ {
    .el-input__inner {
      line-height: 40px;
      height: 40px;
    }
    .el-input-group__prepend {
      background-color: #fff;
    }
  }
  i {
    font-size: 14px !important;
  }
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
