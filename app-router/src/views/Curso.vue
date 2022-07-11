<template>
  <div>
    <h1>{{curso}}</h1>
    <ul>
      <li>Aula 1</li>
      <li>Aula 2</li>
      <li>Aula 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CursoView",
  props: ["curso"],
  created(){
    console.log('componente criado')
  },
  beforeRouteUpdate(to, from, next){
    next()
  }
}
</script>

<style>

</style>