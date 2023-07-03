<script setup>

import { ref } from "vue";
import MeuCarrinho from "./components/meuCarrinho.vue";
import Listagem from "./components/listagem.vue";

</script>



<template>

<h1>Livraria incrível</h1>

<div class="container-geral">

  <MeuCarrinho />
  <Listagem />

</div>

</template>

<style scoped>

</style>
