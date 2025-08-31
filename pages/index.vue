<template>
  <div style="padding: 20px">
    <div style="margin-bottom: 12px">
      <input
        v-model="nuevoNombreInput"
        placeholder="Nombre contador (máx 20)"
      />
      <button @click="agregar" :disabled="!puedeAgregarContador">
        Agregar contador
      </button>
    </div>

    <p>Total contadores: {{ contadores.length }}</p>
    <p>Suma total (getter): {{ sumaTotal }}</p>

    <ListadorDeContadores
      :contadores="contadores"
      @incrementar="incrementar"
      @decrementar="decrementar"
      @eliminar="eliminar"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ListadorDeContadores from "@/components/listador-de-contadores/ListadorDeContadores.vue";

const store = useStore();
const nuevoNombreInput = ref("");

const contadores = computed(() => store.state.contadores);
const sumaTotal = computed(() => store.getters.sumaTotal);

const puedeAgregarContador = computed(() => {
  const caracteresNombre = nuevoNombreInput.value.trim();
  return (
    caracteresNombre.length > 0 &&
    caracteresNombre.length <= 20 &&
    store.getters.maximoContadores
  );
});

function agregar() {
  store.commit("agregarContador", nuevoNombreInput.value);
  nuevoNombreInput.value = "";
}

function incrementar(id) {
  store.commit("incrementar", id);
}
function decrementar(id) {
  store.commit("decrementar", id);
}
function eliminar(id) {
  store.commit("eliminarContador", id);
}
</script>

