<template>
  <div class="ordenar-contadores">
    <select v-model="ordenSeleccionado" class="container-element">
      <option disabled value="">Ordenar Contadores</option>
      <option value="nombre-asc">Por nombre ASC</option>
      <option value="nombre-desc">Por nombre DESC</option>
      <option value="valor-asc">Por valor ASC</option>
      <option value="valor-desc">Por valor DESC</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const ordenSeleccionado = computed({
  get: () => store.state.ordenSeleccionado,
  set: (valor) => store.commit("actualizarOrden", valor),
});
</script>

<style scoped>
.ordenar-contadores {
  margin-bottom: 1rem;
}
</style>
