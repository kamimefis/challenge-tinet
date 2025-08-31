<template>
  <ul>
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
    <p>No hay contadores. Deseas agregar uno?</p>
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
