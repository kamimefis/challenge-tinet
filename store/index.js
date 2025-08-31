import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      // Define your state here
      contadores: [],
    };
  },
  mutations: {
    agregarContador(state, nombre) {
      const inputNombre = (nombre || "").trim();
      if (!inputNombre) return;
      if (inputNombre.length > 20) return;
      if (state.contadores.length >= 20) return;
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      state.contadores.push({ id, nombre: inputNombre, valor: 0 });
    },
    eliminarContador(state, id) {
      state.contadores = state.contadores.filter((contador) => contador.id !== id);
    },
    incrementar(state, id) {
      const contador = state.contadores.find((item) => item.id === id);
      if (!contador) return;
      if (contador.valor < 20) contador.valor++;
    },
    decrementar(state, id) {
      const contador = state.contadores.find((item) => item.id === id);
      if (!contador) return;
      if (contador.valor > 0) contador.valor--;
    },
  },
  actions: {
    // Define your actions here
  },
  getters: {
    // Define your getters here
    sumaTotal: (state) => state.contadores.reduce((acc, c) => acc + c.valor, 0),
    maximoContadores: (state) => state.contadores.length <= 20,
  },
});
