<template>
  <footer>
    <div class="footer-content">
      <span class="icon">Σ</span>
      <p>contadores: <strong>{{ sumaTotal }}</strong></p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const sumaTotal = computed(() => store.getters.sumaTotal);
</script>

<style scoped>
footer {
  background-color: #0f0d21;
  border-top: 1px solid #2a2740;
  padding: 12px 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #f1f1f1;
  font-size: 20px;
}

.footer-content .icon {
  font-size: 24px;
  color: #ffcc00;
}

.footer-content strong {
  color: #4ade80;
  font-weight: bold;
}
</style>