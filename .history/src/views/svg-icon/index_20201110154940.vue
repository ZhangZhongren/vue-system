<template>
  <div>
    <el-row>
      <el-col v-for="v in iconArr" :key="v.id" :span="3" class="text-center mb-20">
        <div class="f-12 mb-10">
          <svg-icon class="pointer" :icon-class="v.id.split('icon-')[1]" />
        </div>
        <el-button v-Clipboard="v.id.split('icon-')[1]" type="text">{{ v.id.split('icon-')[1] }}</el-button>
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
 section {
   transform: scale();
   transform-origin: left top;
 }
</style>
