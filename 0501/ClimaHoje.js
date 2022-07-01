export default {
  name: 'ClimaHoje',
  template: `
    <div>
      <h1>Componente 1</h1>
      <p>A temperatura hoje é de {{temp}} Cº</p>
    </div>
  `,
  data() {
    return {
      temp: {},
    };
  },
  methods: {
    buscarClima() {
      fetch('https://api.origamid.dev/weather/rio')
        .then((res) => res.json())
        .then(
          (json) =>
            (this.temp = json.consolidated_weather[0].max_temp.toFixed(1)),
        );
    },
  },
  created() {
    this.buscarClima();
  },
};
