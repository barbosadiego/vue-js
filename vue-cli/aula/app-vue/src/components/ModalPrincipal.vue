<template>
  <div>
    <h1>Este é o modal</h1>
    <slot name="header" :logo="logo"></slot>
    <!-- {{user.nome}} -->
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalPrincipal',
  data(){
    return{
      logo: 'Techno',
      user:{
        nome: 'Diego',
        sobrenome: 'Barbosa'
      }
    }
  }
};
</script>

<style></style>
