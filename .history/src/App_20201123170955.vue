<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { changeTheme } from '@/utils/index.js'
export default {
  name: 'app',
  created() {
    console.log(this.$store.state)
  },
  mounted() {
    changeTheme(this.$store.state.setting.theme)
  }
}
</script>

<style lang="scss">
@import './style/base';
</style>
