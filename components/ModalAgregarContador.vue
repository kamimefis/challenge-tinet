<template>
  <div v-if="modalAbierto" class="modal-overlay">
    <div class="modal-content">
      <h3>Agregar Contador</h3>
      <input
        type="text"
        placeholder="Nombre contador (máx 20)"
        :value="nuevoNombre"
        @input="actualizarNuevoNombre($event.target.value)"
        @keyup.enter="agregarContador"
      />
      <div class="botones">
        <button class="btn btn-guardar" @click="agregarContador" :disabled="disabledSaveButton">Guardar</button>
        <button class="btn btn-cancelar" @click="cerrarModal">Cancelar</button>
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
  background: #dedede;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-width: 90%;
  color: black;
}

.botones {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.btn-guardar{
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: #469a23;
  color: white;
}

.btn-cancelar{
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: #de1414;
  color: white;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input{
  width: 100%;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #a9a8a8;
  box-sizing: border-box;
}

</style>
