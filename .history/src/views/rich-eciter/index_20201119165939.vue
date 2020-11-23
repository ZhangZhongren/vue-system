<template>
  <div class="">
    <editor
      api-key="67ko8dt47sykh3rqbe771cm3csh3fh8g7yrz1w94as55se4j"
      :init="{}"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'rich-editer',
  components: {
    // tinymce,
    Editor
  },
  props: {},
  data() {
    return {
      value: '<p>123</p>',
      init: {
        // language_url: '/tinymce/langs/zh_CN.js', // 语言包的路径
        language: 'zh_CN', // 语言
        // skin_url: '/tinymce/skins/ui/oxide', // skin路径
        height: 300, // 编辑器高度
        branding: false, // 是否禁用“Powered by TinyMCE”
        menubar: false, // 顶部菜单栏显示
      }
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    tinymce.init({})
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
