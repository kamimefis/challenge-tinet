<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const texto = computed({
  get: () => store.state.busqueda,
  set: (valor) => store.commit("setBusqueda", valor),
});
</script>

<template>
  <div>
    <input
      type="text"
      v-model="texto"
      placeholder="Buscar contador por nombre..."
    />
  </div>
</template>

