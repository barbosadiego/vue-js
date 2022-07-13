<template>
  <div>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{aula.nome}} | {{aula.duracao}} horas</p>
        <button @click="ADD_AULA(aula)">Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'aulas',
  methods: {
    ...mapMutations(['ADD_AULA']),
  },
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
};
</script>

<style></style>
