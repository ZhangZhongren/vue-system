import TypeInput from './type-input'
import TypeNumber from './type-number'
import typeBoolean from './type-boolean'
const TYPE_COMPONENTS = {
  string: 'TypeInput',
  number: 'TypeNumber',
  boolean: 'typeBoolean'
}
export default {
  components: {
    TypeInput,
    TypeNumber,
    typeBoolean
  },
  methods: {
    getComponentNaneByType(type) {
      return TYPE_COMPONENTS[type]
    }
  },
}
