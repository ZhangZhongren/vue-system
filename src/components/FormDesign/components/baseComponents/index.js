import MyInput from './MyInput'

const ComponentsNames = {
  input: 'MyInput'
}

export default {
  components: {
    MyInput
  },
  methods: {
    formatComponentsName(type) {
      return ComponentsNames[type]
    }
  }
}
