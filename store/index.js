import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      // Define your state here
      contadores: [],
      modalAbierto: false,
      nuevoNombre: "",
      ordenSeleccionado: "",
      filtro: {
        tipo: "",
        valor: null,
      },
      busqueda: "" 
    };
  },
  mutations: {
    locally(state) {
      if (import.meta.client) {
        const saved = localStorage.getItem("contadores");
        if (saved) {
          state.contadores = JSON.parse(saved);
        }
      }
    },
    agregarContador(state) {
      const inputNombre = (state.nuevoNombre || "").trim();
      if (!inputNombre) return;
      if (inputNombre.length > 20) return;
      if (state.contadores.length >= 20) return;
      const id =
        Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      state.contadores.push({ id, nombre: inputNombre, valor: 0 });
      state.modalAbierto = false;
      if (import.meta.client) {
        localStorage.setItem("contadores", JSON.stringify(state.contadores));
      }
    },
    eliminarContador(state, id) {
      state.contadores = state.contadores.filter(
        (contador) => contador.id !== id
      );
      if (import.meta.client) {
        localStorage.setItem("contadores", JSON.stringify(state.contadores));
      }
    },
    incrementar(state, id) {
      const contador = state.contadores.find((item) => item.id === id);
      if (!contador) return;
      if (contador.valor < 20) contador.valor++;
      if (import.meta.client) {
        localStorage.setItem("contadores", JSON.stringify(state.contadores));
      }
    },
    decrementar(state, id) {
      const contador = state.contadores.find((item) => item.id === id);
      if (!contador) return;
      if (contador.valor > 0) contador.valor--;
      if (import.meta.client) {
        localStorage.setItem("contadores", JSON.stringify(state.contadores));
      }
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
    setFiltro(state, { tipo, valor }) {
      state.filtro.tipo = tipo;
      state.filtro.valor = valor;
      if (import.meta.client) {
        sessionStorage.setItem("filtro", JSON.stringify(state.filtro));
      }
    },
    cargarFiltros(state) {
      if (import.meta.client) {
        const filtrosGuardados = sessionStorage.getItem("filtro");
        if (filtrosGuardados) {
          state.filtro = JSON.parse(filtrosGuardados);
        }
      }
    },
    limpiarFiltro(state) {
      state.filtro = { tipo: "", valor: null };
    },
    setBusqueda(state, texto) {
      state.busqueda = texto;
    }
  },
  actions: {
    // Define your actions here
    inicializarApp({ commit }) {
      commit("cargarFiltros");
    },
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
    contadoresFiltrados: (state, getters) => {
      let lista = getters.contadoresOrdenados;
      if (state.filtro.tipo === "mayor" && state.filtro.valor !== null) {
        lista = lista.filter((item) => item.valor > state.filtro.valor);
      }
      if (state.filtro.tipo === "menor" && state.filtro.valor !== null) {
        lista = lista.filter((item) => item.valor < state.filtro.valor);
      }
      if (state.busqueda) {
        lista = lista.filter((item) =>
          item.nombre.toLowerCase().includes(state.busqueda.toLowerCase()));
      }
      return lista;
    },
  },
});
