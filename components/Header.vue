<template>
  <header class="app-header">
    <div class="top-header">
      <h1>Gestor de Contadores</h1>
      <div class="left-header">
        <BuscarContadores/>
        <button class="btn" @click="abrirModal">Agregar contador</button>
      </div>
    </div>
    <hr class="divider">
    <OrdenarContadores />
    <FiltrarContadores />
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import OrdenarContadores from "./OrdenarContadores.vue";
import FiltrarContadores from "./FiltrarContadores.vue";
import BuscarContadores from "./BuscarContadores.vue";

const store = useStore();

function abrirModal() {
  store.commit("abrirModal");
}
</script>

<style scoped>
.app-header {
  padding: 1rem;
}

.top-header{
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}

.left-header{
  display: flex;
  align-items: center;
  gap: 15px;
  /* flex-wrap: wrap; */
}

@media (max-width: 650px) {
  .top-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .left-header {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}

.btn {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s, transform 0.1s;
  background: #2e3668;
  color: #ffffff;
}

.btn:hover {
  background: #353d6e;
}

.divider {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #202851, transparent);
  margin: 16px 0;
}

</style>
