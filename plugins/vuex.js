import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      dataCart: [],
    };
  },
  mutations: {
    setdatacart(state, value){
      state.dataCart = value
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});