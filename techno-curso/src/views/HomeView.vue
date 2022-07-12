<template>
  <div class="home">
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <h1>home</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'home-view',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  },
};
</script>
