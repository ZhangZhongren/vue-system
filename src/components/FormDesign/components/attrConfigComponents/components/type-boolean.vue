<template>
  <el-switch
    v-model="val"
    active-color="#13ce66"
    inactive-color="#ff4949"
  />
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
      type: Boolean,
      required: true,
      default: false
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
