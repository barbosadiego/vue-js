<template>
  <div>
    <h2>Aluno</h2>
    <p>Aulas completas: </p>
    <ul>
      <li v-for="item in aulasCompletas" :key="item.nome">
        {{item.nome}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'aluno',
  computed: mapState(['aulasCompletas'])
}
</script>

<style>

</style>