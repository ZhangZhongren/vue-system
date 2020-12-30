import GridConfig from './grid-config'

const TYPE_CONFIG_COMPONENTS = {
  grid2: 'GridConfig',
  grid4: 'GridConfig'
}

export default {
  components: {
    GridConfig
  },
  methods: {
    formatConfigName(type) {
      return TYPE_CONFIG_COMPONENTS[type]
    }
  }
}
