<template>
  <div :class="{active: active, 'item-container': true}">
    <slot />
    <el-button-group v-if="active" class="ctrls">
      <el-button type="text" icon="el-icon-delete" @click.stop="$emit('handleDelete')" />
    </el-button-group>
    <el-button-group v-if="active" class="drag">
      <el-button type="text">
        <i class="iconfont icon-drag drag-widget" />
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'item-container',
  components: {},
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
