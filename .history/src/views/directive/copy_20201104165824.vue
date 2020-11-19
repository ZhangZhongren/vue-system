<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="data" />
      </el-col>
      <el-col :span="2">
        <el-button>复制</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      data: 'copy'
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
