<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <h2 class="titulo">{{produto.nome}}</h2>
      <p>{{produto.descricao}}</p>
      <p class="preco">{{produto.preco}}</p>
    </div>
  </section>
</template>

<script>
import {api} from '@/services.js'

export default {
  name: 'produtos-lista',
  data(){
    return{
      produtos: null
    }
  },
  methods:{
    getProdutos(){
      api.get('/produto')
        .then(res => this.produtos = res.data)
      ;

      // fetch('http://localhost:3000/produto')
      //   .then(res => res.json())
      //   .then(json => this.produtos = json)
    }
  },
  created(){
    this.getProdutos()
  }
}
</script>

<style>

</style>