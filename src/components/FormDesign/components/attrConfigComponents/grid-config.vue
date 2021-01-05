<template>
  <div class="pl-10 config-form">
    <el-form :model="configData" label-width="70px">
      <el-form-item label="栅格间隔">
        <el-input-number v-model="configData.options.gutter" :min="0" />
      </el-form-item>
      <el-form-item label="justify">
        <el-select v-model="configData.options.justify">
          <el-option
            v-for="v in JUSTIFY"
            :key="v.val"
            :label="v.val"
            :value="v.val"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="align">
        <el-select v-model="configData.options.align">
          <el-option
            v-for="v in ALIGN"
            :key="v.val"
            :label="v.val"
            :value="v.val"
          />
        </el-select>
      </el-form-item>
      <el-divider />
      <div class="fs-14 mb-20 pr-20">
        col配置
        <el-button-group class="ml-100">
          <el-button
            type="text"
            icon="el-icon-plus"
            @click=" configData.columns.push({
              list: [],
              span: 4,
              offset: 0,
              push: 0,
              pull: 0
            })"
          >新增</el-button>
        </el-button-group>

      </div>
      <template v-for="(item, index) in configData.columns">
        <div :key="index">
          <el-form-item label="span">
            <el-input-number v-model="item.span" :min="0" :max="24" />
          </el-form-item>
          <el-form-item label="offset">
            <el-input-number v-model="item.offset" :min="0" :max="24" />
          </el-form-item>
          <el-form-item label="push">
            <el-input-number v-model="item.push" :min="0" :max="24" />
          </el-form-item>
          <el-form-item label="pull">
            <el-input-number v-model="item.pull" :min="0" :max="24" />
          </el-form-item>
          <el-row type="flex" class="pr-20" justify="end">
            <el-button-group>
              <el-button type="danger" @click=" configData.columns.splice(index, 1)">删除</el-button>
            </el-button-group>
          </el-row>
          <el-divider />
        </div>
      </template>
    </el-form>
  </div>
</template>

<script>
import { JUSTIFY, ALIGN } from '../../config/variable'
export default {
  name: 'design-grid-config',
  components: {},
  props: {
    configData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      JUSTIFY,
      ALIGN
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
