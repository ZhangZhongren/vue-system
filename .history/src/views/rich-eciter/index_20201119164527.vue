<template>
  <div class="">
    <editor id="tinymce" v-model="value" :init="init" />
  </div>
</template>

<script>
// import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'

export default {
  name: 'rich-editer',
  components: {
    // tinymce,
    Editor
  },
  props: {},
  data() {
    return {
      value: '<p>123</p>'
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
