<template>
  <div class="">
    <div id="map" style="height: 800px" />
    <router-link to="/directive">start</router-link>
  </div>
</template>

<script>
import CH from '../../../static/echarts/CH'
export default {
  name: 'home',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {
    import('echarts').then(echarts => {
      const chart = echarts.init(document.getElementById('map'))
      chart.setOption({
        series: [{
          type: 'map',
          map: 'china'
        }]
      })
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
