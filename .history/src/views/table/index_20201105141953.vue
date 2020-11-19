<template>
  <div>
    <my-table :columns="columns" :table-data="tableData" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      columns: [
        {
          prop: 'name',
          label: '姓名'
        }
      ]
    }
  },
  computed: {
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
