import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      dataCard: [],
    };
  },
  mutations: {
    setdatacart(state, value){
      state.dataCard = value
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});