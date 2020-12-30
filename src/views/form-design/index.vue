<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container style="height:calc(100vh - 60px)">
      <form-design />
    </el-container>
  </el-container>
</template>

<script>
import FormDesign from '@/components/FormDesign/index'
import Header from '@/views/layout/header/index'

export default {
  name: 'form-design-content',
  components: {
    FormDesign,
    Header
  },
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
