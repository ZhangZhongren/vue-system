<template>
  <div>
    <my-table :columns="columns" :table-data="tableData">
      <el-button slot="action">edit</el-button>
    </my-table>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          name: 'zzr',
          age: '25'
        }
      ],
      columns: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'action',
          label: '操作',
          scope: 'action'
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
