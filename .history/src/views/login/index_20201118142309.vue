<template>
  <div class="login-container">
    <div class="form">
      <DragVerification />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: #368;
  padding-top: 1px;
  .form {
    width: 600px;
    padding: 40px;
    border-radius: 15px;
    margin: 100px auto 0;
    background-color: #fff;
  }
}
</style>
