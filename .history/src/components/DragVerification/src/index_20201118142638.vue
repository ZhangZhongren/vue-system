<template>
  <div>
    <div class="slice-content">
      <div :style="slideItem" class="slid-item" />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    height: {
      default: '80px',
      type: String
    }
  },
  data() {
    return {
    }
  },
  computed: {
    slideItem() {
      return {
        height: this.height
      }
    }
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
