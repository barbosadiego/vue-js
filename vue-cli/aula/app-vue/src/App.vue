<template>
  <div id="app">
    <HeaderPrincipal />
    <modal-principal>
      <template v-slot:header="{logo}">
        <h2>Subtítulo {{logo}}</h2>
      </template>
      <template v-slot:default="{user}">
        {{user.nome}}
        <p>Texto do slot</p>
        <button>Clique</button>
      </template>
      <template v-slot:footer>
        <p>footer named slot</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue';
export default {
  name: 'app',
  components: {
    ModalPrincipal,
  },
};
</script>

<style></style>
