<template>
  <div class="contato">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Cursos</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'cursos-view',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos');
  },
};
</script>

<style></style>
