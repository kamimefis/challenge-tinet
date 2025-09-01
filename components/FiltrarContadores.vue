<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tipo = ref(store.state.filtro.tipo || ""); 
const valor = ref(store.state.filtro.valor ?? null);

const aplicarFiltro = () => {
  if (!tipo.value || valor.value === null || valor.value === "") {
    return;
  }
  store.commit("setFiltro", { tipo: tipo.value, valor: Number(valor.value) });
};

const limpiarFiltro = () => {
  store.commit("limpiarFiltro");
  tipo.value = "";
  valor.value = null;
};
</script>

<template>
  <div class="filtrar-contadores">
    <select v-model="tipo">
      <option disabled value="">Tipo de filtro</option>
      <option value="mayor">Mayor que</option>
      <option value="menor">Menor que</option>
    </select>

    <input type="number" v-model.number="valor" placeholder="Ingrese número" />

    <button @click="aplicarFiltro">Aplicar</button>
    <button @click="limpiarFiltro">Limpiar</button>
  </div>
</template>

<style scoped>
.filtrar-contadores { display:flex; gap:8px; align-items:center; margin-left:1rem; }
</style>

