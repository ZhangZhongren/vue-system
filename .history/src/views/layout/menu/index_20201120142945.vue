<template>
  <el-menu>
    <template v-for="(menu, index) in menus">
      <el-submenu v-if="menu.children.length > 1" :key="index" :index="index.toString()">
        <template slot="title">
          <i :class="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-if="menu.children">
          <el-menu-item
            v-for="(item, k) in menu.children"
            :key="k"
            :index="`${menu.path + '/' + item.path}`"
            @click="jump(menu.path + '/' + item.path)"
          >
            {{ item.name }}
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item
        v-else
        :key="index"
        :index="index.toString()"
        @click="jump(menu.path + '/' + menu.children[0].path)"
      >
        {{ menu.meta.title }}
      </el-menu-item>
    </template>

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
  methods: {
    jump(path) {
      if (this.$route.path !== path) {
        this.$router.push({ path: path })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
