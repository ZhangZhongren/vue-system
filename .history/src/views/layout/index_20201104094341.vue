<template>
  <el-container>
    <el-header>
      header
    </el-header>
    <el-container>
      <el-aside>
          aside
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
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
