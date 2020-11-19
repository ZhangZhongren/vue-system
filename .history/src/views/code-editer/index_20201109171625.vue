<template>
  <div class="">
    <code-editor
      v-model="jsStr"
      :theme="dark"
    />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      jsStr: 'var a=10;'
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
