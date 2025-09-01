<template>
  <footer>
    <div class="footer-content">
      <p>Suma total de contadores: {{ sumaTotal }}</p>
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
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  position: fixed;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>