<template>
  <div>
    <div :style="`min-height:${height}px;position:relative;`">
      <el-button type="text" style="position: absolute; left: 10px; z-index: 10" @click="expandWindow">
        <svg-icon style="font-size:14px;" icon-class="window-max" />
      </el-button>
      <Monaco
        ref="diffEditor"
        mode="diff"
        class="monaco-border"
        :language="language"
        :height="height"
        :original-code="original"
        :modified-code="modified"
        :theme="theme"
        :options="editorOptions"
        @codeChange="onCodeChang"
      />
    </div>
    <el-dialog
      v-el-drag-dialog
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :title="fileName"
      append-to-body
      @close="colseWindow"
    >
      <Monaco
        ref="diffEditorDialog"
        mode="diff"
        class="monaco-height"
        :language="language"
        :height="height"
        :original-code="original"
        :modified-code="modified"
        :theme="theme"
        :options="editorOptions"
        @codeChange="onCodeChang"
      />
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import { BaseVue } from '@lib'
import Monaco from '@lib/monaco/Monaco.vue'

export default {
  name: 'code-diff-editor',
  components: { Monaco },
  mixins: [BaseVue],
  props: {
    maxable: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      default: '860px',
    },
    label: {
      type: String,
      default: '脚本',
    },
    defaultValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'javascript',
    },
    theme: {
      type: String,
      default: 'vs',
    },
    height: {
      type: String | Number,
      default: 180,
    },
    options: {
      type: Object,
    },
    original: {
      type: String,
    },
    modified: {
      type: String,
    },
    fileName: {
      type: String,
    },
    editorType: {
      default: 'sideBySide'
    }
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  computed: {
    editorOptions() {
      return {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: true,
        cursorStyle: 'line',
        automaticLayout: true,
        glyphMargin: true,
        wordWrap: 'off',
        renderSideBySide: this.editorType === 'sideBySide',
        ...this.options,
      }
    },
  },
  watch: {
    editorType: {
      handler(val) {
        this.$refs['diffEditor'].updateOptions(this.editorOptions)
      }
    }
  },
  methods: {
    onCodeChang(editor) {
      this.$emit('update:modified', editor.modifiedEditor.getValue())
    },
    expandWindow() {
      this.dialogVisible = true
    },
    colseWindow() {
      this.dialogVisible = false
    },
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .max-btn {
    z-index: 100;
    position: absolute;
    left: 10px;
    top: 0px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.4);
    }
  }

  .checkbox {
    position: fixed;
    z-index: 20;
    margin-left: 10px;
    margin-top: 28px;

    .control-label {
      cursor: pointer;
    }
  }

  .monaco-height {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    position: fixed !important;
    height: 78% !important;
  }

  .monaco-border {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
</style>
