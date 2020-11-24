import variables from '@/style/element-variables.scss'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })
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
// changeTheme(variables.theme)
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ]
}

