// import variables from '@/style/element-variables.scss'

const state = {
  // theme: '' || variables.theme
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

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

