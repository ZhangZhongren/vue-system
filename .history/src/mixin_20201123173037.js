import store from './store/index'
export default {
  computed: {
    theme() {
      return store.state.setting.theme
    }
  },
  watch: {
    theme() {
      console.log(this.theme)
    }
  }
}
