<template>
  <v-app width="100%;">
    <v-app-bar
      app
      color="#2c572a"
      dark
      elevation="20"
      class="custom-elevation"
      height="85"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        src="http://gescel.online/assets/salesbridge/logotemporal_001.png"
        alt="Logo"
        style="height: 40px; width: auto; margin-right: 16px"
        class="ml-4 hover-effect"
        id="LogoProyecto"
      />
      <v-toolbar-title>SalesBridge</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Avatar y botón de login -->
      <div
        class="d-flex flex-column justify-center align-center mr-4 hover-effect"
        v-on:click="GestionarLogin()"
      >
        <div class="d-flex flex-column justify-center align-center">
          <v-avatar color="info" size="x-large" class="avatar-hover">
            <v-img ref="avatarImg" src="../src/assets/images/avatar03.png" alt="John">
            </v-img>
          </v-avatar>
        </div>
        <div>
          <p
            style="
              margin-top: 5px;
              font-weight: bold;
              letter-spacing: -0.5px;
              font-size: 14px;
            "
          >
            Login
          </p>
        </div>
      </div>
      <!-- Avatar y botón de login -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      width="400"
      class="hide-scrollbar"
      app
      :mini-variant="!drawer"
      :hide-on-desktop="!drawer"
    >
      <div class="navigation-drawer-content">
        <!-- Contenido del cajón de navegación - Mi menu expandible -->
        <MenuLateralExpandible @EjecutarMenu="ProcesarMenu" />
      </div>
    </v-navigation-drawer>
    <v-main
      :style="{ width: cWidthVMain }"
      class="d-flex flex-row justify-start"      
    >
      <router-view />
    </v-main>
    <v-footer app>
      <v-container fluid>
        <!-- Fila superior con el mensaje y los botones de redes sociales -->
        <v-row
          class="bg-custom white--text py-2 custom-elevation-footer"
          style="height: 75px"
        >
          <v-col cols="12" class="d-flex align-center justify-center">
            <span class="mr-8">Manténgase en contacto por nuestras redes sociales</span>
            <div>
              <v-btn v-for="icon in icons" :key="icon" icon class="mx-2" color="white">
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
    bAutenticado: false,
    cWidthVMain: "1000px",
  }),
  methods: {
    GestionarLogin() {
      if (this.bAutenticado) {
        // Cerrar sesión
        console.log("Autenticado");
      } else {
        // Abrir diálogo de inicio de sesión
        console.log("No autenticado");
        this.$router.push({ path: "/login" });
      }
    },
    ProcesarMenu(aOpcion) {
      if(aOpcion.ruta){
        console.log("Ruta: " + aOpcion.ruta);
        this.$router.push({ path: aOpcion.ruta });
      }
      else  console.log("sin ruta ",aOpcion);      
    },

    CapturarTamaño() {
      this.nWidth = window.innerWidth;
      this.nHeight = window.innerHeight;
      console.log("Ancho: " + this.nWidth + " Alto: " + this.nHeight);
    },
  },

  watch: {
    drawer: function (val) {
      if (val) {
        this.cWidthVMain = this.nWidth - 64 - 400 + "px";
        console.log(this.cWidthVMain);
      } else {
        this.cWidthVMain = this.nWidth - 64 + "px";
        console.log(this.cWidthVMain);
      }
    },
  },
  created() {
    this.CapturarTamaño();
    window.addEventListener("resize", () => {
      this.CapturarTamaño();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
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
.custom-elevation .v-app-bar {
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.23); /* Ajusta estos valores según necesites */
}
.custom-elevation-footer {
  box-shadow: 0 -6px 8px rgba(0, 0, 0, 0.23); /* Ajusta los valores según necesites */
}
/* Estilo para el hover */
.hover-effect:hover {
  cursor: pointer;
  opacity: 0.8;
}
.bg-custom {
  background-color: #4737a5; /* Tu color personalizado */
  color: white; /* Asegurándose de que el texto tenga contraste y sea legible */
}
</style>
