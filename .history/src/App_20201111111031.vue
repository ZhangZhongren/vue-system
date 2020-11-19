<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'app',
  created() {
    console.log(_)
  }
}
</script>

<style lang="scss">
@import './style/base';
</style>
