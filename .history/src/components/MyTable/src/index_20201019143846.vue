<template>
  <div :key="comKey" class="layer">
    <EditColumns v-if="editColumns" class="edit" :columns="tableColumns" @changeColumns="changeColumns" />
    <el-table
      ref="myTable"
      :data="tableData"
      v-bind="$attrs"
      stripe
      v-on="$listeners"
      @selection-change="_handleSelectionChange"
      @row-click="handleRowClick"
    >
      <el-table-column
        v-if="showIndex"
        type="index"
        width="50"
      />
      <el-table-column
        v-if="checked && tableData.length"
        type="selection"
        :selectable="_selectDisabled"
        width="42"
      />
      <el-table-column
        v-for="(v, k) in tableColumns.filter(item => !item.hidden)"
        :key="k"
        :prop="v.prop"
        :label="v.label"
        v-bind="v"
        :width="v.width || 'auto'"
        show-overflow-tooltip
      >
        <!-- 自定义列头 插槽 -->
        <template slot="header">
          <slot :name="`${v.scope}-header`" :row="v">
            <span>{{ v.label }}</span>
          </slot>
        </template>
        <!-- 自定义列 插槽 -->
        <template slot-scope="scope">
          <slot :name="v.scope" :row="scope.row" :$index="scope.$index">
            <span v-show="getType(_showColData(scope.row, scope.$index, v)) !== 'object'">{{ _showColData(scope.row, scope.$index, v) }}</span>
            <el-button
              v-show="isShowDetailText(_showColData(scope.row, scope.$index, v))"
              @click="showDetail(_showColData(scope.row, scope.$index, v))"
            >详细信息</el-button>
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="详细信息"
      :visible.sync="dialogVisible"
      append-to-body
      width="900px"
    >
      <el-row>
        <el-col v-for="(item, index) in detail" :key="index">
          <KeyVal :label-width="detailKeyWidth" :label="`${index}：`" :val="item" />
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import KeyVal from './key-val'
import EditColumns from './edit-columns'
export default {
  name: 'py-table',
  components: { KeyVal, EditColumns },
  props: {
    tableData: { // 表格数据
      type: Array,
      default: () => []
    },
    columns: { // 列头
      type: Array,
      default: () => []
    },
    checked: { // 显示select
      default: false,
      type: Boolean
    },
    showIndex: {// 显示索引
      default: false,
      type: Boolean
    },
    detailKeyWidth: { // 详细信息的键名宽度
      default: 100,
      type: Number
    },
    editColumns: { // 是否自定义列头
      default: false,
      type: Boolean
    },
    autoSelectRow: { // 点击选中当前行的复选框
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      selectedRows: [],
      dialogVisible: false,
      drawer: false,
      detail: {},
      tableColumns: this.columns,
      comKey: new Date().getTime()
    }
  },
  computed: {
    tablerRef() {
      return this.$refs.myTable
    },
  },
  watch: {
    'tableData'() { // 解决 fixed 错位问题
      this.$nextTick(() => {
        this.$refs.myTable.doLayout()
      })
    }
  },
  methods: {
    handleRowClick(row) {
      if (this.checked && this.autoSelectRow) {
        this.$refs.myTable.toggleRowSelection(row)
      }
    },
    // 获取选中的行
    getSelectRows() {
      return this.selectedRows
    },
    rerender() { // 重绘
      this.comKey = new Date().getTime()
    },
    getType(val) {
      return typeof val
    },
    changeColumns(columns) {
      this.$set(this, 'tableColumns', columns)
      this.rerender()
    },
    // 选择的回调
    _handleSelectionChange(val) {
      this.selectedRows = val
      this.$emit('changrows', val)
    },
    _showColData(row, index, col) {
      if (col.prop) {
        let collValue = row[col.prop]
        const propArr = col.prop.split('.')
        // 链式处理
        if (propArr && propArr.length) {
          let eachRow = row
          propArr.forEach(prop => {
            collValue = eachRow[prop]
            eachRow = collValue // 每次更新一下row的字段深度
          })
        }
        // formatter 处理
        if (col.formatter && typeof col.formatter === 'function') {
          return col.formatter(row, col, collValue, index)
        }
        return this.renderVal(collValue)
      }
      return ''
    },
    renderVal(val) {
      if (typeof val === 'boolean') {
        return val ? '是' : '否'
      }
      return val
    },
    // 是否禁用
    _selectDisabled(row) {
      return row.disabled !== true
    },
    // 处理选中指定的 row
    toggleSelection(rows) {
      if (Array.isArray(rows)) {
        rows.forEach(row => {
          this.$refs.myTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.myTable.clearSelection()
      }
    },
    showDetail(row) {
      this.detail = row
      this.dialogVisible = true
    },
    isShowDetailText(obj) {
      return typeof obj === 'object' && obj !== null && Object.keys(obj).length
    }
  }
}
</script>
<style lang="scss" scoped>
  .layer {
    position: relative;
    .edit {
      position: absolute;
      right: 0;
      top: -2px;
      z-index: 9999;
    }
  }
</style>

