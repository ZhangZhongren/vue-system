<template>
  <el-dialog
    title="JSON"
    :visible.sync="dialogVisible"
    width="800px"
  >
    <code-editor
      v-model="jsonStr"
      theme="vs-dark"
      :options="{ readOnly: true, wordWrap: 'on' }"
      :height="400"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">关闭</el-button>
    </span>
  </el-dialog>

</template>

<script>
export default {
  name: 'form-design-view-json',
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogVisible: false,
      jsonStr: JSON.stringify(this.formData)
    }
  },
  methods: {
    show() {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
