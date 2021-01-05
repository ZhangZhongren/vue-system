<template>
  <el-input-number v-model="val" clearable />
</template>

<script>
export default {
  name: 'type-number',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: NaN
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  computed: {
  },
  watch: {
    val(val) {
      this.$emit('change', val)
    }
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
