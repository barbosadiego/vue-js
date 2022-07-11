<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescrição'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescrição from './components/AulaDescrição.vue';
import AulaDownload from './components/AulaDownload.vue';
export default {
  name: 'App',
  components: {
    AulaDescrição,
    AulaDownload,
  },
  data() {
    return {
      componenteAtivo: 'AulaDownload',
    };
  },
};
</script>

<style></style>
