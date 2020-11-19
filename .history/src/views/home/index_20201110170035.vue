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
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['工作地点']
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true
        },
        series: [
          {
            name: '工作地点',
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
              { name: '上海', value: 2 },
              { name: '四川', value: 1 },
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
