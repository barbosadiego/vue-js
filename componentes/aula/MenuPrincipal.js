import BotaoContador from './BotaoContador.js';

export default {
  name: 'MenuPrincipal',
  components: {
    BotaoContador,
  },
  template: `
    <ul class="menu">
      <li>Home</li>
      <li>Sobre</li>
      <li>Contato</li>
      <botao-contador></botao-contador>
    </ul>
  `,
};
