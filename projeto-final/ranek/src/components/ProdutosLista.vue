<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <h2 class="titulo">{{produto.nome}}</h2>
      <p>{{produto.descricao}}</p>
      <p class="preco">{{produto.preco}}</p>
    </div>
    {{url}}
  </section>
</template>

<script>
import {api} from '@/services.js'
import {serialize} from '@/helpers.js'

export default {
  name: 'produtos-lista',
  data(){
    return{
      produtos: null,
      produtosPorPagina: 9,
    }
  },
  computed:{
    url(){
      const query = serialize(this.$route.query)
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    }
  },
  methods:{
    getProdutos(){
      api.get(this.url)
        .then(res => this.produtos = res.data)
      ;

      // fetch('http://localhost:3000/produto')
      //   .then(res => res.json())
      //   .then(json => this.produtos = json)
    }
  },
  watch:{
    url(){
      this.getProdutos();
    }
  },
  created(){
    this.getProdutos()
  }
}
</script>

<style>

</style>