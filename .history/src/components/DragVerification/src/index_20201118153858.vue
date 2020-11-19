<template>
  <div>
    <div ref="content" :style="sliceContent" class="slice-content">
      <div
        ref="bar"
        :style="slideItem"
        :class="{ 'slid-item': true, 'slid-item-active': move, 'slid-item-success': verify }"
        @mousedown="sledecedBar"
      >
        <i :class=" verify ? 'el-icon-check' : 'el-icon-right'" />
      </div>
      <span v-show="!move" class="tip">{{ verify ? '验证通过' : '滑动验证' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag-verification',
  props: {
    mode: {
      default: 'default',
      type: String
    },
    height: {
      default: 40,
      type: Number
    }
  },
  data() {
    return {
      move: false,
      mousePosition: 0,
      verify: false
    }
  },
  computed: {
    slideItem() {
      return {
        height: this.height + 'px',
        width: this.height + 'px'
      }
    },
    sliceContent() {
      return {
        height: this.height + 'px'
      }
    },
    sliceContentWidth() {
      return this.$refs.content.getBoundingClientRect().width - 2
    }
  },
  mounted() {
    document.body.addEventListener('mousemove', (e) => {
      if (this.move && !this.verify) {
        let left = e.clientX - this.mousePosition
        if (left < 0) {
          left = 0
        }
        if (left > this.sliceContentWidth - this.height) {
          left = this.sliceContentWidth - this.height
          this.mode === 'default' && this.verifySuccess()
        }
        this.$refs.bar.style.left = left + 'px'
      }
    })
    document.body.addEventListener('mouseup', (e) => {
      this.cancleMove()
    })
  },
  methods: {
    sledecedBar(e) {
      if (!this.verify) {
        this.mousePosition = e.clientX
        this.move = true
      }
    },
    cancleMove() {
      if (!this.verify) {
        this.move = false
        this.$refs.bar && (this.$refs.bar.style.left = 0)
      }
    },
    verifySuccess() {
      this.$emit('success')
      this.verify = true
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
      cursor: pointer;
      i {
        font-size: 14px;
      }
      &:hover {
        background-color: #409EFF;
        i {
          color: #fff;
        }
      }
      &-active {
        background-color: #409EFF;
        i {
          color: #fff;
        }
      }
      &-success {
        background-color: #67c23a;
        i {
          color: #fff;
        }
      }
    }

    .tip {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      font-size: 12px;
      color: #999;
      width: max-content;
      height: max-content;;
    }
  }
</style>
