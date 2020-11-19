<template>
  <div class="login-container">
    <div class="form">
      <h2 class="text-center">zzr-system</h2>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="form.name">
            <i slot="prepend" class="el-icon-s-custom" />
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="form.pwd" type="password">
            <i slot="prepend" class="el-icon-lock" />
          </el-input>
        </el-form-item>
      </el-form>
      <DragVerification :is-verify="isVerify" @success="verifySuccess" />
      <el-button class="mt-20" type="primary" @click="login">登陆</el-button>
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
      },
      isVerify: false,
      rules: {
        name: [
          { required: true, message: '请输入用户名' }
        ],
        pwd: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },
  methods: {
    verifySuccess() {
      // jsCookie.set('token', 'logined')
      // this.$router.push({ path: '/' })
    },
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.isVerify && this.form.name === 'admin' && this.form.pwd === '000000') {
            jsCookie.set('token', 'logined')
            this.$router.push({ path: '/' })
          }
        }
      })
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
    .el-button--mini{
      width: 100%;
      margin-top: 20px;
      padding: 12px 0;
    }
  }
  i {
    font-size: 14px !important;
  }
  .form {
    width: 400px;
    height: max-content;
    padding: 20px 40px 40px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: -100px;
  }
}
</style>
