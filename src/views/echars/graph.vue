<template>
  <div class="">
    <div id="graph" />
  </div>
</template>

<script>
export default {
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
    const categories = [
      { name: '注册' }, { name: '实人' }, { name: '企业' }, { name: '交易' }, { name: '其他' }
    ]
    const colors = ['#4472C5', '#ED7C30', '#80FF80', '#FF8096', '#800080']
    const option = {
      title: {
        text: '关系图'
      },
      tooltip: {
        formatter: function(x) {
          return x.data.des
        }
      },
      // 工具箱
      // toolbox: {
      //   // 显示工具箱
      //   show: true,
      //   feature: {
      //       mark: {
      //           show: true
      //       },
      //       // 还原
      //       restore: {
      //           show: true
      //       },
      //       // 保存为图片
      //       saveAsImage: {
      //           show: true
      //       }
      //   }
      // },
      color: colors,
      legend: [{
        itemHeight: 20,
        itemWidth: 20,
        icon: 'circle',
        data: categories.map(function(a) {
          return a.name
        })
      }],
      series: [{
        type: 'graph', // 类型:关系图
        layout: 'force', // 图的布局，类型为力导图
        symbolSize: 40, // 调整节点的大小
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 10],
        force: {
          repulsion: 2500,
          edgeLength: [10, 50]
        },
        draggable: true,
        lineStyle: {
          normal: {
            width: 2,
            color: '#368', // 连线颜色
          }
        },
        edgeLabel: {
          normal: {
            show: true,
            formatter: function(x) {
              return x.data.name
            }
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {}
          }
        },

        // 数据
        data: [
          {
            name: '1', // 连线的时候用
            des: '15326271168', // hover显示
            symbolSize: 70, // 尺寸 可以前端自定义 也可以后端定
            category: 0, // 对应 categories 数组的下标
          },
          {
            name: '2',
            des: '15326271168',
            symbolSize: 50,
            category: 1,
          },
          {
            name: '3',
            des: '15326271168',
            symbolSize: 50,
            category: 2,
          }, {
            name: '4',
            des: '15326271168',
            symbolSize: 50,
            category: 3,
          }, {
            name: '5',
            des: '15326271168',
            symbolSize: 50,
            category: 1,
          },
          {
            name: '6',
            des: '15326271168',
            symbolSize: 20,
            category: 4,
          },
          {
            name: '7',
            des: '15326271168',
            symbolSize: 20,
            category: 4,
          },
          {
            name: '8',
            des: '15326271168',
            symbolSize: 20,
            category: 4,
          }
        ],
        links: [{
          source: '1',
          target: '2',
          name: '',
          des: '',
          lineStyle: {
            color: colors[1]
          }
        }, {
          source: '1',
          target: '3',
          name: '',
          des: '',
          lineStyle: {
            color: colors[2]
          }
        }, {
          source: '1',
          target: '5',
          name: '',
          des: '',
          lineStyle: {
            color: colors[4]
          }
        }, {
          source: '1',
          target: '4',
          name: '',
          des: '',
          lineStyle: {
            color: colors[3]
          }
        },
        {
          source: '5',
          target: '6',
          name: '',
          des: '',
          lineStyle: {
            color: colors[4]
          }
        },
        {
          source: '5',
          target: '7',
          name: '',
          des: '',
          lineStyle: {
            color: colors[4]
          }
        },
        {
          source: '5',
          target: '8',
          name: '',
          des: '',
          lineStyle: {
            color: colors[4]
          }
        }
        ],
        categories: categories,
      }]
    }
    import('echarts').then(res => {
      this.chart = res.init(document.getElementById('graph'))
      this.chart.setOption(option)
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  #graph {
    width: 800px;
    height: 800px;
  }
</style>
