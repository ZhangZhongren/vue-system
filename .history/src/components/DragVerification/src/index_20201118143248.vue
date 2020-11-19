<template>
  <div>
    <div class="slice-content">
      <div :style="slideItem" class="slid-item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag-verification',
  props: {
    height: {
      default: '40px',
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
        height: this.height,
        width: this.height
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
  .slice-content {
    height: max-content;
    border: 1px solid #222;
    position: relative;
    .slid-item {
      border: 1px solid #ccc;
      position: absolute;
      left: 0;
      top: 0;
      &:hover {
        background-color: #409EFF;
        cursor: pointer;
      }
    }
  }
</style>
