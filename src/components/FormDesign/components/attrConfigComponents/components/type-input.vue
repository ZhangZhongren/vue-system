<template>
  <el-input v-model="val" clearable />
</template>

<script>
export default {
  name: 'type-input',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  watch: {
    val(val) {
      this.$emit('change', val)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
