<template>
  <div>
    <div :style="sliceContent" class="slice-content">
      <div :style="slideItem" class="slid-item" @mousedown="sledecedBar">
        <i class="el-icon-right" />
      </div>
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
    },
    sliceContent() {
      return {
        height: this.height
      }
    }
  },
  methods: {
    sledecedBar(e) {
      this.move = true
    }
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
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #409EFF;
        cursor: pointer;
        i {
          color: #fff;
        }
      }
    }
  }
</style>
