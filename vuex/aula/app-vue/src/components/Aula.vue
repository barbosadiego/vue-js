<template>
  <div>
    <h1>Aula {{ totalAulas }}, esse é o usuário: {{ user }}</h1>
    <button @click="COMPLETAR_AULA">Adicionar Aula</button>
    <button @click="handleClick">Modificar usuário</button>
    <input type="text" v-model="novoUser">
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      totalAulas: 25,
      nome: 'diego',
      novoUser: '',
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo(){
      return this.nome.toUpperCase()
    }
  },
  methods:{
    ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
    handleClick(){
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas,
      })
    },
  }
};
</script>

<style></style>
 