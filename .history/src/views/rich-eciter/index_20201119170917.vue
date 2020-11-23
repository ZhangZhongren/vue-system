<template>
  <div class="tinymce-container editor-container" :class="{fullscreen:fullscreen}">
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <div class="editor-custom-btn-container">
      <multiple-upload class="editor-upload-btn" @success="imageSuccess" />
    </div>
  </div>
</template>

<script>
import '../../../static/tinymce/js/tinymce/tinymce.min.js'
export default {
  name: 'rich-editer',
  components: {
  },
  props: {},
  data() {
    return {
      tinymceId: '000',
      value: '<p>123</p>'
    }
  },
  computed: {
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
