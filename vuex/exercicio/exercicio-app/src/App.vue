<template>
  <div id="app">
    <p>{{$store.state.acao.acao}}</p>
    <Aluno />
    <Curso />
    <h3>Livros</h3>
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        {{livro.nome}}
      </li>
    </ul>
    <h3>Livro lidos</h3>
    <ul>
      <li v-for="livro in $store.getters.livrosLidos" :key="livro.nome">
        {{livro.nome}}
      </li>
    </ul>
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue';
import Curso from '@/components/Curso.vue';

export default {
  name: 'App',
  components: {
    Aluno,
    Curso,
  },
  created(){
    this.$store.dispatch('acao/puxarAcao')
  }
};
</script>

<style></style>
