<template>
  <div id="app">
    <nav>
      <ul class="menu">
        <li>
          <a href="" @click.prevent="componenteAtivo = 'EmpresaSobre'">Sobre</a>
        </li>
        <li>
          <a href="" @click.prevent="componenteAtivo = 'EmpresaServicos'">Serviços</a>
        </li>
        <li>
          <a href="" @click.prevent="componenteAtivo = 'EmpresaContato'">Contato</a>
        </li>
      </ul>
    </nav>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import EmpresaSobre from './components/EmpresaSobre.vue'
import EmpresaServicos from './components/EmpresaServicos.vue'
import EmpresaContato from './components/EmpresaContato.vue'

export default {
  name: 'App',
  components: {
    EmpresaSobre,
    EmpresaServicos,
    EmpresaContato,
  },
  data() {
    return {
      componenteAtivo: "EmpresaSobre",
    };
  },
};
</script>

<style>
  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  button{
    cursor: pointer;
  }
  #app{
    max-width: 800px;
    margin: 0 auto;
  }
  .menu{
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0px;
  }
  .menu a{
    background-color: #84e;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    border-radius: 4px;
  }
  .menu a:hover{
    background-color: rgba(136, 68, 238, 0.8);
  }
</style>
