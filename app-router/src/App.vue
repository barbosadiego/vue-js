<template>
  <div id="app">
    <h1>Logo</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #234;
  margin-top: 60px;
  border: 4px solid;
  margin: 20px;
  padding: 20px;
}

nav{
  padding: 20px 0;
}

a {
  font-weight: bold;
  color: #234;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #4b8;
}

</style>
