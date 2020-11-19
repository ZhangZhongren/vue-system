<template>
  <div>
    <el-table v-bind="$attrs" v-on="$listeners">
      <el-table-column v-for="col in columns" :key="col.prop" :label="col.label" :prop="col.prop">
        <template>
          <el-input v-if="col.ctrl === 'input'" v-bind="col.attrs" />
          <pm-select v-else-if="col.ctrl === 'select'" v-bind="col.attrs" v-on="col.listeners" />
        </template>
      </el-table-column>
      <el-table-column label="操作" />
    </el-table>
    <el-button-group>
      <el-button type="primary" icon="el-icon-plus" @click="addRow" />
    </el-button-group>
  </div>
</template>
<script>
export default {
  name: 'pm-table',
  props: {
    props: {
      type: Object,
      default: () => ({})
    },

    options: {
      default: [],
      type: Array,
    },
  },
  computed: {
    _options() {
      return this.data || this.options
    }
  },
  watch: {
  },
  mounted() {
  },

  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
