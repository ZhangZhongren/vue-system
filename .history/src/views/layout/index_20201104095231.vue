<template>
  <el-container>
    <el-header>
      header
    </el-header>
    <el-container>
      <el-aside>
          <Aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './menu/index'
export default {
  name: 'Layout',
  components: {
    Aside
  },
  props: {},
  data () {
    return {
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
