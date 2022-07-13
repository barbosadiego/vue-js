import Vue from 'vue';
import Vuex from 'vuex';
import acao from '@/store/acao.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    livros: [
      {
        nome: 'O Senhor dos Anéis',
        lido: true,
      },
      {
        nome: 'Harry Potter',
        lido: true,
      },
      {
        nome: 'As Crônicas de Gelo e Fogo',
        lido: false,
      },
    ],
  },
  getters: {
    livrosLidos(state) {
      return state.livros.filter((livro) => livro.lido);
    },
  },
  mutations: {
    ADD_AULA(state, payload) {
      state.aulasCompletas.push(payload);
    },
  },
  actions: {
    completarAula(context, payload) {
      context.commit('ADD_AULA', payload);
    },
  },
  modules: {
    acao,
  },
});
