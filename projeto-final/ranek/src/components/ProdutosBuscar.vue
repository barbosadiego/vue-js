<template>
  <form>
    <input name="busca" type="text" id="busca" v-model="busca" placeholder="Buscar...">
    <input type="submit" value="Buscar" id="lupa" @click.prevent="buscarProdutos">
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

<style scoped>
  form{
    max-width: 600px;
    margin: 30px auto 60px;
    position: relative;
  }
  #busca{
    width: 100%;
    padding: 20px;
    border: none;
  }
  #busca:focus,
  #busca:hover{
    transform: scale(1.1);
  }
  #lupa{
    width: 62px;
    height: 62px;
    background: url('../assets/search.svg') no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    box-shadow: none;
  }
</style>