<template>
  <ul style="padding: 0">
    <Contador
      v-for="contador in contadores"
      :key="contador.id"
      :contador="contador"
      @incrementar="$emit('incrementar', $event)"
      @decrementar="$emit('decrementar', $event)"
      @eliminar="$emit('eliminar', $event)"
    />
  </ul>
  <div v-if="contadores.length === 0" style="margin-top: 16px">
    <h1>No hay contadores. Desea agregar uno?</h1>
  </div>
</template>

<script setup>
import Contador from "@/components/contador/Contador.vue";

defineProps({
  contadores: {
    type: Array,
    required: true,
  },
});
defineEmits(["incrementar", "decrementar", "eliminar"]);
</script>
