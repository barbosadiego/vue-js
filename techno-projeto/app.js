const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos.json')
        .then((res) => res.json())
        .then((json) => (this.produtos = json));
    },
    fetchUmProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((res => res.json()))
        .then((json) => (this.produto = json));
    },
  },
  created() {
    this.fetchProdutos();
  },
});
