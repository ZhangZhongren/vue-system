<template>
  <div class="">
    <div id="map" style="height: 800px" />
    <router-link to="/directive">start</router-link>
  </div>
</template>

<script>
import china from '../../../static/echarts/china'
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
      echarts.registerMap('china', china)
      const chart = echarts.init(document.getElementById('map'))
      chart.setOption({
        title: {
          text: 'zzr-test',
          subtext: 'test-desc',
          left: 'center'
        },
        series: [
          {
            type: 'map',
            map: 'china',
            roam: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: '上海', value: Math.round(Math.random() * 1000) },
              { name: '成都', value: Math.round(Math.random() * 1000) },
            ]
          }
        ]
      })
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
