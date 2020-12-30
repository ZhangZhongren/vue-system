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
              <el-row
                v-if="element && element.key"
                :key="element.key"
                class="widget-col widget-view"
                type="flex"
                :class="{active: currentSelect.key === element.key}"
                :gutter="element.options.gutter ? element.options.gutter : 0"
                :justify="element.options.justify"
                :align="element.options.align"
                @click.native.stop="_handlecurrentSelect(index)"
              >
                <el-col v-for="(col, colIndex) in element.columns" :key="colIndex" :span="col.span ? col.span : 0">

                  <draggable
                    v-model="col.list"
                    :no-transition-on-drag="true"
                    v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
                    @end="_handleMoveEnd"
                    @add="handleWidgetColAdd($event, element, colIndex)"
                  >
                    <transition-group name="fade" tag="div" class="col-list">
                      <!-- <widget-form-item
                        v-for="(el, i) in col.list"
                        v-if="el.key"
                        :key="el.key"
                        :element="el"
                        :select.sync="currentSelect"
                        :index="i"
                        :data="col"
                      /> -->
                    </transition-group>

                  </draggable>
                </el-col>
                <el-button-group v-if="currentSelect.key == element.key" class="ctrls">
                  <el-button type="text" icon="el-icon-delete" @click.stop="_handleWidgetDelete(index)" />
                </el-button-group>
                <el-button-group v-if="currentSelect.key == element.key" class="drag">
                  <el-button type="text">
                    <i class="iconfont icon-drag drag-widget" />
                  </el-button>
                </el-button-group>
              </el-row>
            </template>
            <template v-else>
              <form-item
                v-if="element && element.key"
                :key="element.key"
                :element="element"
                @click.native.stop="_handlecurrentSelect(index)"
              />
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
export default {
  name: 'design-form-container',
  components: {
    Draggable,
    FormItem
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
    _handlecurrentSelect(index) {
      if (index === undefined) {
        this.currentSelect = {}
      } else {
        this.currentSelect = this.formData.list[index]
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
    handleWidgetColAdd(e) {
      // console.log(e)
    },
    _handleWidgetDelete(index) {
      this.formData.list.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
