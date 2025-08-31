<template>
  <header class="app-header">
    <h1>Gestor de Contadores</h1>
    <OrdenarContadores />
  </header>
</template>

<script setup>
import OrdenarContadores from "./OrdenarContadores.vue";
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
