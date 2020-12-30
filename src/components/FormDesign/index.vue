<template>
  <el-container>
    <el-aside width="250px">
      <component-list :list="FORM_COMPONENTS" />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <el-button-group class="fr mt-10">
          <el-button type="text">预览</el-button>
        </el-button-group>
      </el-header>
      <el-main>
        <form-container :form-data="formData" :select="select" />
      </el-main>
    </el-container>
    <el-aside width="250px">
      <attr-config :form-data="formData" />
    </el-aside>
  </el-container>

</template>

<script>
import ComponentList from './components/aside'
import FormContainer from './components/form-container'
import AttrConfig from './components/attr-config'
import { FORM_COMPONENTS } from './config/index'
import './iconfont/iconfont.css'
export default {
  name: 'form-design',
  components: {
    ComponentList,
    FormContainer,
    AttrConfig
  },
  props: {},
  data() {
    return {
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
  }
}
</script>
<style lang="scss" scoped>
</style>
