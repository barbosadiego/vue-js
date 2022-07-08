export default {
  name: 'ExibirDados',
  props: ['info'],
  template: `
    <ul>
      <li v-for="(value, key) in info">
        <p>{{key}}: {{value}}</p>
      </li>
    </ul>
  `,
};
