<template>
  <div>
    <el-row>
      <el-col v-for="v in iconArr" :key="v.id" :span="4" class="text-center">
        <svg-icon :icon-class="v.id.split('icon-')[1]" />
        <br>
        <span class="f-12">{{ v.id.split('icon-')[1] }}</span>
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
