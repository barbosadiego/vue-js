import CambioDolar from './CambioDolar.js';

export default {
  name: 'MercadoAplle',
  template: `
    <div>
      <h1>Componente 3</h1>
      <p>O valor de mercado da Apple é de US{{acoes | format}}</p>
      <h1>Componente 2</h1>
      <cambio-dolar></cambio-dolar>
    </div>
  `,
  data() {
    return {
      acoes: {},
    };
  },
  filters: {
    format(valor) {
      return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },
  },
  //2º componente registrado neste componente
  components: {
    CambioDolar,
  },
  methods: {
    buscaAcoes() {
      fetch('https://api.origamid.dev/stock/aapl/quote')
        .then((res) => res.json())
        .then((json) => (this.acoes = json.marketCap));
    },
  },
  created() {
    this.buscaAcoes();
  },
};
