<template>
  <div class="mb-4">
    <el-dropdown ref="dropdown" class="fr" trigger="click" :hide-on-click="false">
      <el-tooltip class="item" effect="dark" content="列头设置" placement="left">
        <i class="el-icon-setting pointer" />
      </el-tooltip>
      <el-dropdown-menu slot="dropdown">
        <section class="pt-10 pb-10">
          <el-row class="pl-20">
            <draggable v-model="list" group="people" @start="drag=true" @end="drag=false">
              <el-col v-for="(item, index) in list" :key="index">
                <span class="f-14 index">{{ index + 1 }}</span>
                <el-checkbox v-model="item.show"><div class="columnItem text-ellipsis">{{ item.label }}</div></el-checkbox>
              </el-col>
            </draggable>
          </el-row>
        </section>
        <div class="p-10 controller">
          <el-row type="flex" justify="space-between">
            <el-checkbox v-model="chooseAll" class="mr-100" @change="checkAll">全选</el-checkbox>
            <el-button-group>
              <el-button type="primary" @click="sureEdit">确定</el-button>
              <el-button @click="reseat">重置</el-button>
            </el-button-group>
          </el-row>

        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'edit-columns',
  components: { draggable },
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      list: [],
      chooseAll: false
    }
  },
  created() {
    this.reseat()
  },
  methods: {
    sureEdit() {
      this.$refs.dropdown.visible = false
      const columns = []
      this.list.forEach((item, index) => {
        columns.push({
          ...this.columns.find(current => current.label === item.label),
          hidden: !item.show
        })
      })
      this.$emit('changeColumns', columns)
    },
    checkAll(status) {
      this.list.forEach(item => {
        item.show = status
      })
    },
    reseat() {
      const columnsArr = []
      this.columns.forEach(item => {
        columnsArr.push({
          label: item.label,
          show: !item.hidden
        })
      })
      this.list = columnsArr
    }
  }
}
</script>
<style lang="scss" scoped>
  section {
    width: 300px;
    max-height: 400px;
    overflow: auto;
    .index {
      display: inline-block;
      width: 24px;
    }
    .columnItem {
      width: 200px;
    }
  }
  .controller {
    border-top: 1px solid #f1f2f3;
  }
  i {
    font-size: 12px;
    &:hover {
      color: #368;
      transform: scale(1.3);
      transform-origin: right top;
    }
  }
</style>
