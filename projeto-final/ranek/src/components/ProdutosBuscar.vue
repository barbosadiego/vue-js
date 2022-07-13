<template>
  <form>
    <input name="busca" type="text" id="busca" v-model="busca">
    <input type="submit" value="Buscar" id="lupa" @click.prevent="buscarProdutos">
    {{busca}}
  </form>
</template>

<script>
export default {
  name: 'produtos-buscar',
  data(){
    return{
      busca: ''
    }
  },
  methods:{
    buscarProdutos(){
      this.$router.push({query: { q: this.busca }})
    }
  }
}
</script>

<style>

</style>