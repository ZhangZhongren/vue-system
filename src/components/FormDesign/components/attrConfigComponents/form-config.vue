<template>
  <div class="">
    <el-form size="mini" :model="model">
      <div class="fs-12">对齐方式</div>

      <el-radio-group v-model="model.labelPosition" class="mt-20">
        <el-radio-button v-for="item in alians" :key="item.key" :label="item.val">{{ item.key }}</el-radio-button>
      </el-radio-group>

      <el-divider />

      <div class="fs-12">label 宽度</div>
      <el-row class="mt-20">
        <el-col>
          <el-input-number v-model="model.labelWidth" :min="1" label="描述文字" />
        </el-col>
      </el-row>

      <el-divider />

      <div class="fs-12">size</div>

      <el-radio-group v-model="model.size" class="mt-20">
        <el-radio-button v-for="item in sizes" :key="item.key" :label="item.val">{{ item.key }}</el-radio-button>
      </el-radio-group>

      <el-divider />
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'design-form-config',
  components: {},
  props: {
    model: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      alians: [
        {
          key: '左对齐',
          val: 'left'
        },
        {
          key: '右对齐',
          val: 'right'
        },
        {
          key: '顶部对齐',
          val: 'top'
        }
      ],
      sizes: [
        {
          key: 'medium',
          val: 'medium'
        },
        {
          key: 'small',
          val: 'small'
        },
        {
          key: 'mini',
          val: 'mini'
        }
      ]
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
