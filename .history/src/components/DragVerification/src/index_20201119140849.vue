<template>
  <div>
    <div ref="content" :style="selectContent" class="select-content">
      <div
        ref="bar"
        :style="slideItem"
        :class="{ 'slid-item': true, 'slid-item-active': move, 'slid-item-success': verify }"
        @mousedown="slidedBar"
      >
        <i :class=" verify ? 'el-icon-check' : 'el-icon-right'" />
      </div>
      <span v-show="!move || verify" class="tip">{{ verify ? '验证通过' : '滑动验证' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag-verification',
  props: {
    mode: { // 组件模式
      default: 'default',
      type: String
    },
    height: { // 滑块的宽高
      default: 40,
      type: Number
    },
    delay: { // 延迟触发成功的回调
      default: 1000,
      type: Number
    },
    isVerify: {
      type: Boolean,
      default: false
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
    selectContent() {
      return {
        height: this.height + 'px'
      }
    },
    selectContentWidth() {
      return this.$refs.content.getBoundingClientRect().width - 2
    }
  },
  mounted() {
    document.body.addEventListener('mousemove', this.moveBar)
    document.body.addEventListener('mouseup', this.cancleMove)
  },
  beforeDestroy() {
    document.body.removeEventListener('mousemove', this.moveBar)
    document.body.removeEventListener('mouseup', this.cancleMove)
  },
  methods: {
    slidedBar(e) {
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
    moveBar(e) {
      if (this.move && !this.verify) {
        let left = e.clientX - this.mousePosition
        if (left < 0) {
          left = 0
        }
        if (left > this.selectContentWidth - this.height) {
          left = this.selectContentWidth - this.height
          this.mode === 'default' && this.verifySuccess()
        }
        this.$refs.bar.style.left = left + 'px'
      }
    },
    verifySuccess() {
      setTimeout(() => {
        this.$emit('success')
      }, this.delay)
      this.$emit('update:isVerify', true)
      this.verify = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .select-content {
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
      height: max-content;
      user-select: none;
    }
  }
</style>
