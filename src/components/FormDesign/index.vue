<template>
  <el-container>
    <el-aside width="250px">
      <component-list :list="FORM_COMPONENTS" />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <form-header @clear="clear" @viewJSON="$refs['view-json'].show()" />
        <view-json ref="view-json" :form-data="formData" />
      </el-header>
      <el-main>
        <form-container :form-data="formData" :select.sync="select" />
      </el-main>
    </el-container>
    <el-aside width="300px">
      <attr-config :form-data="formData" :select="select" />
    </el-aside>
  </el-container>
</template>

<script>
import ComponentList from './components/aside'
import FormContainer from './components/form-container'
import AttrConfig from './components/attr-config'
import FormHeader from './components/header'
import ViewJson from './components/viewJson'
import { FORM_COMPONENTS } from './config/index'
import './iconfont/iconfont.css'
export default {
  name: 'form-design',
  components: {
    ComponentList,
    FormContainer,
    AttrConfig,
    FormHeader,
    ViewJson
  },
  props: {},
  data() {
    return {
      showJson: false,
      formData: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'small'
        },
      },
      select: {}
    }
  },
  computed: {
    FORM_COMPONENTS() {
      return FORM_COMPONENTS
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    clear() {
      this.formData.list = []
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
