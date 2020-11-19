<template>
  <div>
    <el-row>
      <el-col v-for="v in iconArr" :key="v.id" :span="1">
        <svg-icon :icon-class="v.id.split('icon-')[1]" />
        {{ .split('icon-')[1] }}
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
