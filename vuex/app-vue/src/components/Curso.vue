<template>
  <div>
    <h1>Curso</h1>
    <p><Aula /></p>
    <p>{{ this.$store.state.aulasCompletas }}</p>
  </div>
</template>

<script>
import Aula from '@/components/Aula.vue';

export default {
  name: 'Curso',
  components: {
    Aula,
  },
};
</script>

<style></style>
