<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { Search } from 'lucide-vue-next';

const store = useStore();

const texto = computed({
  get: () => store.state.busqueda,
  set: (valor) => store.commit("setBusqueda", valor),
});
</script>

<template>
  <div class="input-wrapper">
    <Search class="icon"/>
    <input
      type="text"
      v-model="texto"
      placeholder="Buscar nombre"
    />
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.icon {
  position: absolute;
  height: 20px;
  color: #666;
  pointer-events: none;
  margin-left: 5px;
}

input {
  padding: 8px 16px 8px 36px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.3);
}

@media (max-width: 650px) {
  input {
    width: 100%;
  }
}
</style>