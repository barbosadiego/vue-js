<template>
  <div>
    <h1>Contato</h1>
    <form>
      <div>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" placeholder="Nome"/>
      </div>
      <div>
        <label for="telefone">Telefone</label>
        <input type="text" name="telefone" id="telefone" placeholder="Telefone">
      </div>
      <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
      <button type="submit" @click.prevent>Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmpresaContato'
};
</script>

<style>
  label{
    display: block;
  }
  input{
    margin: 10px 0;
    font-size: 1rem;
    font-family: inherit;
    padding: 10px;
  }
  button{
    display: block;
  }
  textarea{
    font-family: inherit;
    font-size: 1rem;
    padding: 10px;
  }
</style>
