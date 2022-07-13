<template>
  <div>
    <h1>Aula {{ totalAulas }}, esse é o usuário: {{ user }}</h1>
    <button @click="mostrarConsole">Mostrar console</button>
    {{nomeMaiusculo}}
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      totalAulas: 25,
      nome: 'diego',
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo(){
      return this.nome.toUpperCase()
    }
  },
  methods:{
    mostrarConsole(){
      console.log(this.$store.state.user)
    }
  }
};
</script>

<style></style>
 