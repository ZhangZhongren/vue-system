<template>
  <div>
    <RichEditer v-model="value" />
    {{ value }}
  </div>

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
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
