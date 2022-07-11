<template>
  <div>
    <h1>Página de Cursos: {{curso}}</h1>
    <router-link to="/cursos/javascript">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursosView",
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