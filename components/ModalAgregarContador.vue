<template>
  <div v-if="modalAbierto" class="modal-overlay">
    <div class="modal-content">
      <h2>Agregar Contador</h2>
      <input
        type="text"
        placeholder="Nombre contador (máx 20)"
        :value="nuevoNombre"
        @input="actualizarNuevoNombre($event.target.value)"
      />
      <div class="botones">
        <button @click="agregarContador" :disabled="disabledSaveButton">Guardar</button>
        <button @click="cerrarModal">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const modalAbierto = computed(() => store.state.modalAbierto);
const nuevoNombre = computed(() => store.state.nuevoNombre);

const cerrarModal = () => store.commit("cerrarModal");
const agregarContador = () => store.commit("agregarContador");
const actualizarNuevoNombre = (valor) => store.commit("actualizarNuevoNombre", valor);

const disabledSaveButton= computed(()=> nuevoNombre.value === '' || nuevoNombre.value.length >20);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-width: 90%;
}

.botones {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
