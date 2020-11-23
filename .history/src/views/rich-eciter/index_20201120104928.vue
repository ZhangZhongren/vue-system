<template>
  <RichEditer />
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
