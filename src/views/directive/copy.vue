<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="data" />
      </el-col>
      <el-col :span="15" :offset="1">
        <el-button v-Clipboard="data" type="primary">{{ $t('copy') }}</el-button>
      </el-col>
      <el-col class="mt-20" :span="6">
        <el-input v-model="test" placeholder="在这里试一下吧" type="textarea" />
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
      data: 'copy content',
      test: ''
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
