<template>
  <RichEditer v-model="value" />
</template>
<script>
import RichEditer from '@/components/RichEditer/index'
export default {
  name: 'rich-editer',
  components: {
    RichEditer
  },
  data() {
    return {
      value: '<p>322222</p>'
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.initTinymce()
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
