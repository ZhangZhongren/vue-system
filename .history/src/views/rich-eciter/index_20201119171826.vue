<template>
  <div class="tinymce-container editor-container">
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <div class="editor-custom-btn-container" />
  </div>
</template>

<script>
export default {
  name: 'rich-editer',
  components: {
  },
  props: {
    // 默认填充到富文本的html文件
    html: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      default() {
        return []
      }
    },
    menubar: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      tinymceId: '000'
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.initTinymce()
  },
  methods: {
    initTinymce() {
      window.tinymce.init({
        fontsize_formats: '12px 14px 16px 18px 20px 24px 36px',
        // language: 'zh_CN',
        // language_url: '/static/tinymce_5.0.8/langs/zh_CN.js',
        selector: `#${this.tinymceId}`,
        height: this.height,
        // body_class: 'panel-body ',
        object_resizing: true,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        // plugins: plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        default_link_target: '_blank',
        link_title: false,
        init_instance_callback: editor => {
          if (this.value) {
            editor.setContent(this.value)
          }
          this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
            this.editorContent = editor.getContent()
          })
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', e => {
            this.fullscreen = e.state
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
