<script setup>
import { produtos } from '@/_data/produtos.js'
import { adicionar } from '@/_data/carrinho.vue'
import Cardprodutos from '@/components/CardLivro.vue'
</script>

<template>
  <div class="listagem-produtos">
    <card-produtos
      v-for="produto in produtos"
      v-bind:key="produto.id"
      v-bind:produtos="produto"
      @adicionar="adicionar"
    />
  </div>
</template>

<style scoped>
.listagem-produtos {
  display: flex;
  flex-wrap: wrap;
}
</style>