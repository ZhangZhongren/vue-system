<template>
  <el-menu>
    <el-submenu v-for="(menu, index) in menus" :key="index" :index="index.toString()">
      <template slot="title">
        <i :class="menu.meta.icon" />
        <span>{{ menu.meta.title }}</span>
      </template>
      <template v-if="menu.children">
        <el-menu-item
          v-for="(item, k) in menu.children"
          :key="k"
          :index="`${index}-${k}`"
        >
          <router-link :to="menu.path + '/' +item.path">
            {{ item.name }}
          </router-link>

        </el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
import { ROUTERS } from '@/router/index'
export default {
  name: 'my-menu',
  data() {
    return {
    }
  },
  computed: {
    menus() {
      return ROUTERS.filter(item => !item.meta.isNotMenu)
    }
  },
  watch: {
  }
}
</script>
<style lang="scss" scoped>
</style>
