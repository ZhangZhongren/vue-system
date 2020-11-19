<template>
  <el-menu
    default-active="2"
    >
    <el-submenu v-for="(menu, index) in ROUTERS" :key="index" :index="index.toString()">
      <template slot="title">
        <i :class="menu.meta.icon"></i>
        <span>{{ menu.meta.title }}</span>
      </template>
      <template v-if="menu.children">
        <el-menu-item
          v-for="(item, k) in menu.children"
          :key="k"
          :index="`${index}-${k}`"
        >
          {{ item.name }}
        </el-menu-item>
      </template>
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
