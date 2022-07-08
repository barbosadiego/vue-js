export default {
  name: 'ClimaTempo',
  template: `
    <p>A temperatura máxima hoje é de {{temp | arredondar}} Cº</p>
  `,
  data() {
    return {
      temp: 0,
    };
  },
  filters:{
    arredondar(valor){
      return valor.toFixed(1)
    }
  },
  methods: {
    buscaClima() {
      fetch('https://api.origamid.dev/weather/rio')
        .then((res) => res.json())
        .then((json) => this.temp = json.consolidated_weather[0].max_temp);
    },
  },
  created(){
    this.buscaClima()
  }
};
