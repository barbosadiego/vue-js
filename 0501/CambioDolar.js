export default {
  name: 'CambioDolar',
  template: `
    <p>O dolar americano está cotado a R$ {{dolar}}</p>
  `,
  data() {
    return {
      dolar: 0,
    };
  },
  // filters: {
  //   arredondar(valor) {
  //     return valor.toFixed(2);
  //   },
  // },
  methods: {
    buscarCambio() {
      fetch('https://api.origamid.dev/exchange/usd')
        .then((res) => res.json())
        .then((json) => (this.dolar = json.rates.BRL.toFixed(2)));
    },
  },
  created() {
    this.buscarCambio();
  },
};
