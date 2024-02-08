<template>
  <v-app>
    <v-main class="borde d-flex  flex-row justify-start fill-height" >
          <!-- Asegúrate de que tu componente Login se muestra o se oculta según la lógica de autenticación -->
          <RouterView />
    </v-main>
    <!-- Asegúrate de que RouterView siempre se renderice o basado en la condición correcta -->
  </v-app>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Login from "./components/login.vue";

export default {
  name: "App",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  components: {
    Login,
  },
};
</script>

<style scoped>
  .borde {
    border: 1px solid grey;
    width:100vw;
    padding:0px;
    margin:0px;
  }
</style>
