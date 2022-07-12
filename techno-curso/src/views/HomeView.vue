<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Home</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';
import PageLoading from '../components/PageLoading.vue';

export default {
  components: { PageLoading },
  name: 'home-view',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  },
};
</script>
