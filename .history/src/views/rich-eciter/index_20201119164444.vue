<template>
  <div class="">
    <Editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false
      }"
    />
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'

export default {
  name: 'rich-editer',
  components: {
    tinymce,
    Editor
  },
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
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
