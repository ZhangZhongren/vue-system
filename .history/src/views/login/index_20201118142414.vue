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
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 500px;
    height: max-content;
    padding: 40px;
    border-radius: 10px;
    background-color: #fff;
  }
}
</style>
