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
    <select v-model="tipo" class="container-element">
      <option disabled value="">Filtrar por</option>
      <option value="mayor">Mayor que</option>
      <option value="menor">Menor que</option>
    </select>

    <input type="number" v-model.number="valor" class="number-input container-element" />

    <button class="btn" @click="aplicarFiltro">Aplicar</button>
    <button class="btn "  @click="limpiarFiltro">Limpiar</button>
  </div>
</template>

<style scoped>
.filtrar-contadores { display:flex; gap:8px; align-items:center; }

.number-input{
  width: 35px;
}

.btn{
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background: #2e3668;
  color: white;
}
</style>

