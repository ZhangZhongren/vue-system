<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import array from 'lodash/array'
export default {
  name: 'app',
  created() {
    console.log(array)
  }
}
</script>

<style lang="scss">
@import './style/base';
</style>
