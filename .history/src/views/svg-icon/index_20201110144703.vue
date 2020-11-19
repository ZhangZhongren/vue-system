<template>
  <div>
    <el-row>
      <el-col v-for="v in iconArr" :key="v.id" :span="3" class="text-center">
        <div>
          <svg-icon class="pointer" :icon-class="v.id.split('icon-')[1]" />
        </div>

        <br>
        <el-button v-Clipboard="v.id.split('icon-')[1]" type="text" class="f-12 mt-50">{{ v.id.split('icon-')[1] }}</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Icons from '@/icons/index'
console.log(Icons)
export default {
  name: 'svg-icon-view',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {
    iconArr() {
      return Icons.map(item => item.default)
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
