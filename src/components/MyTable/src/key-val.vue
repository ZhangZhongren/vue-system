<template>
  <div class="key-val">
    <div class="label" :style="`width:${labelWidth}px;text-align:${align}`">{{ label }}</div>
    <slot name="value">
      <div class="value ml-10">{{ renderVal(val) }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'key-val',
  props: {
    label: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: ''
    },
    labelWidth: {
      default: 100,
      type: Number
    },
    align: {
      default: 'right',
      type: String
    }
  },
  methods: {
    renderVal(val) {
      if (typeof val === 'boolean') {
        return val ? '是' : '否'
      }
      return val
    }
  },
}
</script>
<style lang="scss" scoped>
  .key-val {
    display: flex;
    .key-val {
      display: flex;
      justify-content: flex-start;
    }
    .value {
      color: #777;
      word-wrap: break-word;
      flex: 1;
    }
  }

</style>
