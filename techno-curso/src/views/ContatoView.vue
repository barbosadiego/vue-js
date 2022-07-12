<template>
  <div class="contato">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul>
          <li>
            <strong>Email: </strong>
            <span>{{api.contato.email}}</span>
          </li>
          <li>
            <strong>Telefone: </strong>
            <span>{{api.contato.telefone}}</span>
          </li>
          <li>
            <strong>Endereço: </strong>
            <span>{{api.contato.endereco}}</span>
          </li>
        </ul>
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
