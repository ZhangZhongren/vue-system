<template>
  <el-form :model="configData" label-width="100px" class="pl-10 config-form">
    <el-form-item v-for="(v, k) in configData.options" :key="k" :label="k">
      <component :is="getComponentNaneByType(typeof v)" v-model="configData.options[k]" />
    </el-form-item>
  </el-form>
</template>

<script>
import CFGCOMS from './components/index'
export default {
  name: 'design-input-config',
  mixins: [CFGCOMS],
  props: {
    configData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
