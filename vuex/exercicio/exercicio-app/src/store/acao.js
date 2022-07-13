export default {
  namespaced: true,
  state: {
    acao: null,
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    },
  },
  actions: {
    puxarAcao(context) {
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then((res) => res.json())
        .then((json) => {
          context.commit('UPDATE_ACAO', json);
          context.dispatch('completarAula', {
            nome: 'Apple',
          });
          // console.log(context)
        });
    },
  },
};
