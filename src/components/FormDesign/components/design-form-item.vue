<template>
  <el-form-item :label="$t(`fm.components.fields.${element.type}`)">
    <component :is="formatComponentsName(element.type)" :config="element.options" />
  </el-form-item>
</template>

<script>
import BaseComponents from './baseComponents/index'
export default {
  name: 'design-form-item',
  components: {},
  mixins: [BaseComponents],
  props: {
    index: {
      type: Number,
      default: 0
    },
    element: {
      type: Object,
      default: () => ({})
    }
  },
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
