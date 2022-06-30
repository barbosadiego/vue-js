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
    abrirModal(id){
      this.fetchUmProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
    fecharModal(e){
      if(e.target === e.currentTarget) this.produto = false;
    },
  },
  created() {
    this.fetchProdutos();
  },
});
