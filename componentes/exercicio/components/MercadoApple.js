import CotacaoDolar from "./CotacaoDolar.js";

export default {
  name: 'MercadoApple',
  template: `
    <div>
      <p>O valor de mercado da Apple é {{acao | localizador}}</p>
      <cotacao-dolar></cotacao-dolar>
    </div>
  `,
  components:{
    CotacaoDolar,
  },
  data() {
    return {
      acao: 0,
    };
  },
  filters: {
    localizador(valor) {
      return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  methods: {
    buscaAcao() {
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then((res) => res.json())
        .then((json) => (this.acao = json.marketCap));
    },
  },
  created() {
    this.buscaAcao();
  },
};
