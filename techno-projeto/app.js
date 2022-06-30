const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: 'Item adicionado',
    alertaAtivo: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
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
        .then((res) => res.json())
        .then((json) => (this.produto = json));
    },
    abrirModal(id) {
      this.fetchUmProduto(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      this.alerta(`${nome} foi adicionado ao Carrinho.`)
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    fecharModal(e) {
      if (e.target === e.currentTarget) this.produto = false;
    },
    checarLocalStorage(){
      if(window.localStorage.carrinho){
        this.carrinho = JSON.parse(window.localStorage.carrinho)
      }
    },
    alerta(mensagem){
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1000)
    },
    router(){
      const hash = document.location.hash;
      if(hash){
        this.fetchUmProduto(hash.replace('#', ''));
      }
    },
  },
  watch:{
    carrinho(){
      window.localStorage.carrinho = JSON.stringify(this.carrinho)
    },
    produto(){
      document.title = this.produto.nome || 'Techno';
      const hash = this.produto.id || ''
      history.pushState(null, null, `#${hash}`)
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
    this.router();
  },
});
