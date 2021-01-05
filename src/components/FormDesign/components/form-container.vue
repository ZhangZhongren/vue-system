<template>
  <div class="form-container" @click="_handlecurrentSelect()">
    <el-form :size="formData.config.size" label-suffix=":" :label-position="formData.config.labelPosition" :label-width="formData.config.labelWidth + 'px'">
      <draggable
        v-model="formData.list"
        v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
        @end="_handleMoveEnd"
        @add="_handleWidgetAdd"
      >
        <transition-group name="fade" tag="div" class="form-list p-20">
          <template v-for="(element, index) in formData.list">
            <template v-if="element.type == 'grid2' || element.type == 'grid4'">
              <item-container
                v-if="element && element.key"
                :key="element.key"
                :active="currentSelect.key === element.key"
                @handleDelete="_handleDelete(index, element.key)"
                @click.native.stop="_handlecurrentSelect(formData.list, index)"
              >
                <el-row
                  class="widget-col widget-view p-10"
                  type="flex"
                  :gutter="toZero(element.options.gutter)"
                  :justify="element.options.justify"
                  :align="element.options.align"
                >
                  <el-col
                    v-for="(col, colIndex) in element.columns"
                    :key="colIndex"
                    :span="toZero(col.span)"
                    :offset="toZero(col.offset)"
                    :push="toZero(col.push)"
                    :pull="toZero(col.pull)"
                  >
                    <draggable
                      v-model="col.list"
                      :no-transition-on-drag="true"
                      v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
                      @end="_handleMoveEnd"
                      @add="handleWidgetColAdd($event, element, colIndex)"
                    >
                      <transition-group name="fade" tag="div" class="col-list">
                        <template v-for="(colElement, colElementIndex) in col.list">
                          <item-container
                            v-if="colElement && colElement.key"
                            :key="colElement.key"
                            :active="currentSelect.key === colElement.key"
                            @handleDelete="_handleDeleteColElement(index, colIndex, colElementIndex, colElement.key)"
                            @click.native.stop="_handlecurrentSelect(col.list, colElementIndex)"
                          >
                            <form-item
                              :element="colElement"
                              @click.native.stop="_handlecurrentSelect(col.list, colElementIndex)"
                            />
                          </item-container>
                        </template>

                      </transition-group>

                    </draggable>
                  </el-col>
                </el-row>
              </item-container>

            </template>
            <template v-else>
              <item-container
                v-if="element && element.key"
                :key="element.key"
                :active="currentSelect.key === element.key"
                @handleDelete="_handleDelete(index, element.key)"
                @click.native.stop="_handlecurrentSelect(formData.list, index)"
              >
                <form-item
                  :element="element"
                  @click.native.stop="_handlecurrentSelect(formData.list, index)"
                />
              </item-container>
            </template>
          </template>
        </transition-group>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import '../style/index.scss'
import Draggable from 'vuedraggable'
import FormItem from './design-form-item'
import ItemContainer from './itemContainer'
export default {
  name: 'design-form-container',
  components: {
    Draggable,
    FormItem,
    ItemContainer
  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    select: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      currentSelect: this.select
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
    _handlecurrentSelect(list, index) {
      if (index === undefined) {
        this.currentSelect = {}
      } else {
        this.currentSelect = list[index]
      }
      this.$emit('update:select', this.currentSelect)
    },
    _handleMoveEnd(e) {

    },
    _handleWidgetAdd(e) {
      const newIndex = e.newIndex
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.$set(this.formData.list, newIndex, {
        ...this.formData.list[newIndex],
        options: {
          ...this.formData.list[newIndex].options,
          remoteFunc: 'func_' + key
        },
        key,
        // 绑定键值
        model: this.formData.list[newIndex].type + '_' + key,
        rules: []
      })
    },
    handleWidgetColAdd($event, row, colIndex) {
      console.log($event)
      const newIndex = $event.newIndex
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.$set(row.columns[colIndex].list, newIndex, {
        ...row.columns[colIndex].list[newIndex],
        options: {
          ...row.columns[colIndex].list[newIndex].options,
          remoteFunc: 'func_' + key
        },
        key,
        // 绑定键值
        model: row.columns[colIndex].list[newIndex].type + '_' + key,
        rules: []
      })
    },
    _handleDelete(index, key) {
      if (key === this.currentSelect.key) {
        this.currentSelect = {}
        this.$emit('update:select', this.currentSelect)
      }
      this.formData.list.splice(index, 1)
    },
    _handleDeleteColElement(index, colIndex, eleIndex, key) {
      if (key === this.currentSelect.key) {
        this.currentSelect = {}
        this.$emit('update:select', this.currentSelect)
      }
      this.formData.list[index].columns[colIndex].list.splice(eleIndex, 1)
    },
    toZero(number) {
      if (typeof number !== 'number') {
        return 0
      }
      return number
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
