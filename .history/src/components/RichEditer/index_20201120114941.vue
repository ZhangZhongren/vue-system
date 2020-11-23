<template>
  <div class="tinymce-container editor-container mt-20">
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <div class="editor-custom-btn-container">
      <el-button type="primary">save</el-button>
    </div>
  </div>
</template>
<script>
import toolbar from './toolbar'
import plugins from './plugins'
export default {
  name: 'rich-editer',
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      default: () => []
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
      tinymceId: 'tinymceId' + new Date().getTime()
    }
  },
  computed: {
  },
  watch: {
    value(val) {
      // this.$nextTick(() => {
      //   window.tinymce.get(this.tinymceId).setContent(val || '')
      // })
    }
  },
  created() {
  },
  mounted() {
    this.initTinymce()
    console.log(999)
  },
  methods: {
    initTinymce() {
      window.tinymce.init({
        fontsize_formats: '12px 14px 16px 18px 20px 24px 36px',
        language: 'zh_CN',
        language_url: '/static/tinymce/js/tinymce/langs/zh_CN.js',
        selector: `#${this.tinymceId}`,
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: true,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins: plugins,
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
          editor.on('NodeChange Change KeyUp SetContent', () => {
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
  .tinymce-container {
    position: relative;
    .editor-custom-btn-container {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 9999;
    }
  }
</style>
