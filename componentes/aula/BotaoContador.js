export default {
  name: 'BotaoContador',
  template: `<button @click="total++">Contador: {{total}}</button>`,
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    exibirMensagem() {
      console.log('botao contador');
    },
  },
};
