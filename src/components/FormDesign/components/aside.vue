<template>
  <div class="br-1">
    <el-collapse v-model="activeNames" class="pl-10">
      <el-collapse-item v-for="(v, k) in list" :key="k" :title="v.name" :name="k">
        <draggable
          tag="ul"
          :list="v.list"
          v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
          :move="_handleMove"
          @end="_handleMoveEnd"
          @start="_handleMoveStart"
        >
          <li v-for="(item, index) in v.list" :key="index" class="form-edit-label">
            <a>
              <i class="icon iconfont mr-10" :class="item.icon" />
              <span>{{ $t(`fm.components.fields.${item.type}`) }}</span>
            </a>
          </li>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import '../style/index.scss'
export default {
  name: 'form-design-aside',
  components: {
    Draggable
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeNames: this.list.map((i, index) => index)
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
    _handleMove(e) {
      return true
    },
    _handleMoveEnd(e) {

    },
    _handleMoveStart(e) {

    }
  }
}
</script>
<style lang="scss" scoped>
  .br-1 {
    border-right: 1px solid #f1f1f1;
    height: 100%;
  }
  ul{
    margin: 0;
    overflow: hidden;
    padding-left: 0px;
  }
</style>
