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
        <el-row class="mt-20">
          <el-col :offset="2">
            语言
            <el-select v-model="lang" class="ml-10" @change="changLang">
              <el-option
                v-for="(v, k) in options"
                :key="k"
                :label="v.key"
                :value="v.value"
              />
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
import Cookie from 'js-cookie'

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
      lang: Cookie.get('language') || 'zh',
      options: [
        {
          key: '中文',
          value: 'zh'
        },
        {
          key: '英文',
          value: 'en'
        }
      ]
    }
  },
  methods: {
    themeChange(theme) {
      this.$store.dispatch('setting/changeSetting', {
        key: 'theme',
        value: theme
      })
    },
    changLang(lang) {
      Cookie.set('language', lang)
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
