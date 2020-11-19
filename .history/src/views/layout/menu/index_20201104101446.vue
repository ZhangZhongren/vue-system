<template>
  <el-menu
    default-active="2"
    >
    <el-submenu v-for="(menu, index) in menus" :key="index" :index="index.toString()">
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
  name: 'Menu',
  data () {
    return {  
    }
  },
  watch: {
  },
  computed: {
    menus() {
      return ROUTERS.filter(item => !item.meta.isNotMenu)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
