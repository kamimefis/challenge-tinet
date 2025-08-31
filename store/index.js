import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      // Define your state here
      contadores: [],
      modalAbierto: false,
      nuevoNombre: "",
      ordenSeleccionado: "",
    };
  },
  mutations: {
    agregarContador(state) {
      const inputNombre = (state.nuevoNombre || "").trim();
      if (!inputNombre) return;
      if (inputNombre.length > 20) return;
      if (state.contadores.length >= 20) return;
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      state.contadores.push({ id, nombre: inputNombre, valor: 0 });
      state.modalAbierto = false;
    },
    eliminarContador(state, id) {
      state.contadores = state.contadores.filter(
        (contador) => contador.id !== id
      );
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
    abrirModal(state) {
      state.modalAbierto = true;
      state.nuevoNombre = "";
    },
    cerrarModal(state) {
      state.modalAbierto = false;
    },
    actualizarNuevoNombre(state, valor) {
      state.nuevoNombre = valor;
    },
    actualizarOrden(state, nuevoOrden) {
    state.ordenSeleccionado = nuevoOrden;
    },
  },
  actions: {
    // Define your actions here
  },
  getters: {
    // Define your getters here
    sumaTotal: (state) => state.contadores.reduce((acc, c) => acc + c.valor, 0),
    maximoContadores: (state) => state.contadores.length <= 20,

    contadoresOrdenados: (state) => {
    let copia = [...state.contadores];
    if (state.ordenSeleccionado === "nombre-asc") {
      return copia.sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
      );
    }
    if (state.ordenSeleccionado === "nombre-desc") {
      return copia.sort((a, b) =>
        b.nombre.localeCompare(a.nombre, "es", { sensitivity: "base" })
      );
    }
    if (state.ordenSeleccionado === "valor-asc") {
      return copia.sort((a, b) => a.valor - b.valor);
    }
    if (state.ordenSeleccionado === "valor-desc") {
      return copia.sort((a, b) => b.valor - a.valor);
    }
    return copia;
  },
  },
});
