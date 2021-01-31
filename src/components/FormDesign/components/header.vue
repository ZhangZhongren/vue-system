<template>
  <div class="">
    <el-button-group class="fr mt-10">
      <el-popconfirm
        title="确定清空吗？"
        @confirm="$emit('clear')"
      >
        <el-button slot="reference" type="text"> <i class="el-icon-delete" /><span class="pr-10">清空</span></el-button>
      </el-popconfirm>
      <el-button type="text" @click="$emit('viewJSON')"><i class="el-icon-document" /><span class="pr-10">生成JSON</span></el-button>
      <el-button type="text"><i class="el-icon-document" /><span class="pr-10">生成代码</span></el-button>
      <el-button type="text"> <i class="el-icon-view" /><span class="pr-20">预览</span></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'form-design-header',
  components: {},
  props: {},
  data() {
    return {
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
</style>
