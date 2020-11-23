<template>
  <div class="">
    <editor
      initial-value="<p>Initial editor content</p>"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
      }"
    />
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'

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
  watch: {
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
