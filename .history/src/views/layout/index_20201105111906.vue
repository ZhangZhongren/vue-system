<template>
  <el-container>
    <el-header>
      header
    </el-header>
    <el-container>
      <right-panel>
        <theme-picker />
      </right-panel>
      <el-aside width="200px">
        <Aside style="height: calc(100vh - 70px)" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './menu/index'
import RightPanel from '@/components/RightPanel/index'
import ThemePicker from '@/components/ThemePicker/index'
export default {
  name: 'layout',
  components: {
    Aside,
    RightPanel,
    ThemePicker
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
