<template>
  <li style="margin-bottom: 8px">
    <strong>{{ contador.nombre }}</strong> — <span>{{ contador.valor }}</span>
    <button
      @click="$emit('decrementar', contador.id)"
      :disabled="contador.valor <= 0"
    >
      -
    </button>
    <button
      @click="$emit('incrementar', contador.id)"
      :disabled="contador.valor >= 20"
    >
      +
    </button>
    <button @click="$emit('eliminar', contador.id)">Eliminar</button>
  </li>
</template>

<script setup>
defineProps({
  contador: {
    type: Object,
    required: true,
  },
});
defineEmits(["incrementar", "decrementar", "eliminar"]);
</script>
