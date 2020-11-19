<template>
  <el-menu
    default-active="2"
    >
    <el-submenu v-for="(menu, index) in ROUTERS" :key="index" :index="index">
      
    </el-submenu>
  </el-menu>
</template>

<script>
import { ROUTERS } from '@/router/index'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      ROUTERS
    }
  },
  watch: {
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
