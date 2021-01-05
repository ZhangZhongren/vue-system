import GridConfig from './grid-config'
import InputConfig from './input-config'
const TYPE_CONFIG_COMPONENTS = {
  grid2: 'GridConfig',
  grid4: 'GridConfig',
  input: 'InputConfig'
}

export default {
  components: {
    GridConfig,
    InputConfig
  },
  methods: {
    formatConfigName(type) {
      return TYPE_CONFIG_COMPONENTS[type]
    }
  }
}
