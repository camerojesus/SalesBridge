<template>
  <v-app-bar app class="d-flex justify-left" style="background-color: #2c572a">
    <!-- Agrega un margen a la derecha del logo -->
    <!-- <v-avatar> -->
    <v-img
      src="http://gescel.online/assets/salesbridge/logotemporal_001.png"
      max-height="40"
      contain
      class="mr-3"
      style="min-width: 100px; max-width: 100px"
    >
    </v-img>
    <!-- Controla el ancho del logo y Agrega un margen a la derecha del logo -->
    <!--    </v-avatar> -->
    <v-toolbar-title class="flex-grow-1" style="color: white"
      >SalesBridge</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <!-- Esto crea espacio entre los elementos -->
    <v-toolbar-items> </v-toolbar-items>
  </v-app-bar>
  <MenuLateralExpandible />
</template>

<script>
import MenuLateralExpandible from "@/components/MenuLateralExpandible.vue";
export default {
  components: {
    MenuLateralExpandible,
  },
  name: "menu-lateral-expandible",
  created() {
    console.log("Home creado");
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
