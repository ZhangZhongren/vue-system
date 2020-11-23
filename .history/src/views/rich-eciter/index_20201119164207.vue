<template>
  <div class="">
    <RichEditor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false,

      }"
    />
  </div>
</template>

<script>
import RichEditor from '@tinymce/tinymce-vue'

export default {
  name: 'rich-editer',
  components: {
    RichEditor
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
