<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">唤起弹窗</el-button>
    <el-dialog
      v-el-drag-dialog="!fullscreen"
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
      :fullscreen="fullscreen"
    >
      <div slot="title" class="pr-50  clearfix">
        <span class="fl">提示</span>
        <el-button class="fr f-20" style="font-size: 20px; margin-top: -10px" type="text" icon="el-icon-full-screen" @click.stop="fullscreen = !fullscreen" />
      </div>
      <span>这是一段信息</span>
      <span v-show="!fullscreen" slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      fullscreen: false
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
  }
}
</script>
<style lang="scss" scoped>
.l-50 {
  line-height: 20px;
}
</style>
