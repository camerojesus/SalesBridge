<template>
  <v-app>
    <v-main>
      <!-- Asegúrate de que tu componente Login se muestra o se oculta según la lógica de autenticación -->
      <RouterView />
      <!-- Asegúrate de que RouterView siempre se renderice o basado en la condición correcta -->
    </v-main>
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
      nWidth: 0,
      nHeight: 0,
    };
  },
  components: {
    Login,
  },
  created() {
    this.nWidth = window.innerWidth;
    console.log("Width: ", this.nWidth);
    this.nHeight = window.innerHeight;
  },
};
</script>

<style scoped>
.componente {
  box-sizing: border-box;
}
.borde {
  border: 1px solid grey;
  width: 100%;
  padding: 0px;
  margin: 0px;
  min-width: 100%;
}
</style>
