export default {
  name: 'CotacaoDolar',
  template: `
    <p>O valor do dólar hoje é R$ {{dolar}}</p>
  `,
  data(){
    return{
      dolar: 0,
    }
  },
  methods: {
    buscaDolar() {
      fetch('https://api.origamid.dev/exchange/usd')
        .then((res) => res.json())
        .then((json) => this.dolar = json.rates.BRL.toFixed(2));
    },
  },
  created() {
    this.buscaDolar();
  },
};
