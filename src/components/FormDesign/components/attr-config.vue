<template>
  <div class="attr-config">
    <el-tabs v-model="activeName">
      <el-tab-pane label="控件属性" name="first">
        <component :is="formatConfigName(select.type)" :config-data="formData.list.find(item => item.key === select.key)" />
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="second">
        <from-config class="pl-10" :model="formData.config" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FromConfig from './attrConfigComponents/form-config'
import ConfigComponents from './attrConfigComponents/index'
export default {
  name: 'attr-config',
  components: {
    FromConfig
  },
  mixins: [ConfigComponents],
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    select: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeName: 'first'
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
  .attr-config {
    height: 100%;
    border-left: 1px solid #f1f1f1;
    /deep/ .el-tabs__nav-scroll{
      padding-left: 10px;
    }
  }
</style>
