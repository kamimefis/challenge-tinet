<template>
  <li class="contador-item">
    <div class="contador-info">
      <strong>{{ contador.nombre }}</strong>
    </div>
    <div class="contador-actions">
      <button
        class="btn decremento"
        @click="$emit('decrementar', contador.id)"
        :disabled="contador.valor <= 0"
      >
        <Minus />
      </button>
      <span class="contador-valor">{{ contador.valor }}</span>
      <button
        class="btn incremento"
        @click="$emit('incrementar', contador.id)"
        :disabled="contador.valor >= 20"
      >
        <Plus />
      </button>
      <button class="btn eliminar" @click="$emit('eliminar', contador.id)">
        <Trash2 />
      </button>
    </div>
  </li>
</template>

<script setup>
import { Trash2 } from 'lucide-vue-next';
import { Plus } from 'lucide-vue-next';
import { Minus } from 'lucide-vue-next';
defineProps({
  contador: {
    type: Object,
    required: true,
  },
});
defineEmits(["incrementar", "decrementar", "eliminar"]);
</script>

<style scoped>
.contador-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #363636;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 10px;
  gap: 10px;
  flex-wrap: wrap;
}

.contador-info {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  flex: 1;
  min-width: 120px;
}

.contador-valor {
  font-weight: bold;
  color: #ffffff;
  align-items: center;
  display: flex;
  padding: 0px 5px;
  width: 32px;
  justify-content: center;
}

.contador-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s, transform 0.1s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.decremento {
  background: #f0f0f0;
}

.decremento:hover:not(:disabled) {
  background: #e0e0e0;
}

.incremento {
  background: #d1f5d3;
}

.incremento:hover:not(:disabled) {
  background: #b9ecbb;
}

.eliminar {
  background: #f8d7da;
  margin-left: 20px ;
}

.eliminar:hover {
  background: #f5b5bb;
}

@media (max-width: 600px) {
  .contador-item {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .contador-actions {
    justify-content: center;
    width: 100%;
  }

  .btn {
    flex: 1;
    min-width: 40px;
  }

  .eliminar {
    margin-left: 0;
  }
}
</style>
