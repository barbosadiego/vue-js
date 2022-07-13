import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
  },
  getters: {
  },
  mutations: {
    ADD_AULA(state, payload){
      state.aulasCompletas.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
