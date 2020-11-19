<template>
  <div id="app">
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { compose }
import array from 'lodash/array'
export default {
  name: 'app',
  created() {
    console.log(array.fill([4, 6, 8, 10], '*', 1, -4))
  }
}
</script>

<style lang="scss">
@import './style/base';
</style>
