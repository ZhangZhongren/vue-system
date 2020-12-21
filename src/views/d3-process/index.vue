<template>
  <div>
    <div v-for="(v, k) in _list" :key="k" :class="{ show: v.show, a: true }">{{ v.name }}</div>
  </div>

</template>

<script>
import mock from './mock.json'
import * as d3 from 'd3'
export default {
  name: 'd3-pprocess',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [
        {
          show: true,
          name: 'zzr'
        }
      ]
    }
  },
  data() {
    return {
    }
  },
  computed: {
    _list() {
      return this.list
    }
  },
  watch: {
  },
  created() {
    console.log(mock, d3)
  },
  mounted() {
    this.filterData()
  },
  methods: {
    filterData() {
      const _mock = JSON.parse(JSON.stringify(mock))
      const arr = []

      const delItem = (array) => {
        array.forEach(curent => {
          const index = _mock.findIndex(mockItem => mockItem.sourceSys === curent.sourceSys)
          _mock.splice(index, 1)
        })
        console.log(_mock, '_mock')
      }

      const First = _mock.filter(item => !item.sourceSys)
      arr.push(First)
      delItem(First)

      const getData = (array) => {
        const _arr = []
        array.forEach(item => {
          _arr.push(_mock.filter(mockItem => mockItem.sourceSys === item.sys))
        })
        console.log(array, _arr, '_arr', _mock.slice(0))
        arr.push(_arr)
        delItem(_arr.flat(1))
        if (_mock.length) {
          getData(_arr.flat(1))
        }
      }
      getData(First)
      console.log(arr)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
