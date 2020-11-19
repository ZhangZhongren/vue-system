<template>
  <el-button
    v-if="!hasSlots"
    v-Clipboard="data"
    type="text"
  ><i class="el-icon-copy-document" /></el-button>
  <div v-else v-Clipboard="data" style="cursor: pointer" title="点击复制"><slot /></div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'clip-button',
  directives: {
    clipboard,
  },
  props: {
    data: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasSlots() {
      return !!this.$slots.default
    }
  },

  methods: {
    handleCopy(text, event) {
      clip(text, event)
    }
  },
}
</script>
