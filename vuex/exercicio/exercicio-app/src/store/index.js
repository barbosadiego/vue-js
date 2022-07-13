import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null,
  },
  getters: {
  },
  mutations: {
    ADD_AULA(state, payload){
      state.aulasCompletas.push(payload)
    },
    UPDATE_ACAO(state, payload){
      state.acao = payload
    }
  },
  actions: {
    completarAula(context, payload){
      context.commit('ADD_AULA', payload)
    },
    puxarAcao(context){
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then(res => res.json())
        .then(json => {
          context.commit('UPDATE_ACAO', json)
          context.dispatch('completarAula', {
            nome: 'Apple'
          })
          // console.log(context)
        })
    }
  },
  modules: {
  }
})
