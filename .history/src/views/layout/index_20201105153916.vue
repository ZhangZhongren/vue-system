<template>
  <el-container>
    <el-header>
      zzr
    </el-header>
    <el-container>
      <right-panel>
        <el-row class="mt-50">
          <el-col :offset="2">
            主题
            <br>
            <theme-picker class="mt-5" @change="themeChange" />
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            语言
            <el-select v-model="lang">
              <el-option v-for="(v, k) in options" :key="k" :label="v.key" :value="v.val" />
            </el-select>
          </el-col>
        </el-row>
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
import Cookies from 'js-cookie'

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
      lang: Cookies.get('language') || 'en',
      options: [
        {
          key: '中文',
          val: 'zh'
        },
        {
          key: '英文',
          val: 'en'
        }
      ]
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
    themeChange(theme) {
      this.$store.dispatch('setting/changeSetting', {
        key: 'theme',
        value: theme
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
