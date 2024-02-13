<template>
  <v-app>
    <v-app-bar app color="#2c572a" dark>
      <img
        src="http://gescel.online/assets/salesbridge/logotemporal_001.png"
        alt="Logo"
        style="height: 40px; width: auto; margin-right: 16px"
      />
      <v-toolbar-title>SalesBridge</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" fixed width="400" class="hide-scrollbar">
      <div class="navigation-drawer-content">
        <!-- Contenido del cajón de navegación - Mi menu expandible -->
        <MenuLateralExpandible />
      </div>
    </v-navigation-drawer>

    <v-main>
      <!-- Zona principal para los componentes o páginas -->
    </v-main>
    <v-footer app fixed>
  <v-container fluid>
    <!-- Fila superior con el mensaje y los botones de redes sociales -->
    <v-row class="bg-teal white--text py-2">
      <v-col cols="12" class="d-flex align-center justify-center">
        <span class="mr-8">Manténgase en contacto por nuestras redes sociales</span>
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="mx-2"
            color="white"
          >
            <v-icon :size="20">{{ icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</v-footer>

  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import MenuLateralExpandible from "@/components/MenuLateralExpandible.vue";

export default {
  name: "App",
  components: {
    Footer,
    MenuLateralExpandible,
  },
  data: () => ({
    drawer: null,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.hide-scrollbar {
  overflow-y: auto; /* Permite el desplazamiento vertical */
  scrollbar-width: none; /* Para Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Para WebKit (Chrome, Safari, etc.) */
}
/* Estilos para ocultar la barra de desplazamiento */
.navigation-drawer-content {
  height: 100%; /* Asegura que el contenedor ocupe toda la altura disponible */
  overflow-y: auto; /* Permite el desplazamiento vertical */
  scrollbar-width: none; /* Oculta la barra de desplazamiento en Firefox */
}

.navigation-drawer-content::-webkit-scrollbar {
  display: none; /* Oculta la barra de desplazamiento en WebKit (Chrome, Safari) */
}
</style>
