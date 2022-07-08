import ExibirDados from "./ExibirDados.js";
export default {
  name: 'BuscaEmpresa',
  data() {
    return {
      acao: '',
      simbolo: '',
    };
  },
  components:{
    ExibirDados,
  },
  template: `
    <form>
      <select v-model='simbolo'>
        <option selected value=''>Selecione</option>
        <option value='aapl'>Apple</option>
        <option value='goog'>Goolge</option>
        <option value='msft'>Microsoft</option>
        <option value='amzn'>Amazon</option>
        <option value='fb'>Facebook</option>
      </select>
      <button type="submit" @click.prevent="buscaAcao">Enviar</button>
      <exibir-dados :info="acao"></exibir-dados>
    </form>
  `,
  methods: {
    buscaAcao() {
      fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`)
        .then((res) => res.json())
        .then((json) => (this.acao = json));
    },
  },
};
