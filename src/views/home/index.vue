<template>
  <div class="">
    <el-header>
      <Header />
    </el-header>
    <router-link to="/directive">start</router-link>
  </div>
</template>

<script>
import Header from '@/views/layout/header/index'
export default {
  name: 'home',
  components: {
    Header
  },
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
</style>
