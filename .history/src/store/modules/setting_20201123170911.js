import variables from '@/style/element-variables.scss'
import { changeTheme } from '@/utils/index.js'

const state = {
  theme: variables.theme
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    /* eslint-disable */
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
}
changeTheme(variables.theme)
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

