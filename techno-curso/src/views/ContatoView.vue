<template>
  <div class="contato">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>Contato</h1>
        {{ api }}
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'contato-view',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  },
};
</script>

<style></style>
