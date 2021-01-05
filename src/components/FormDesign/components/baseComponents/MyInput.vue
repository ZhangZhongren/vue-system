<template>
  <el-input v-model="config.defaultValue" v-bind="config" />
</template>

<script>
export default {
  name: 'design-input',
  components: {},
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      name: ''
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
