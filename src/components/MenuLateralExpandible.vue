<template>
  <v-list bg-color="#f2f7f2">
    <template v-for="(option, index) in menuOptions" :key="index">
      <!-- Se verifica si la opción tiene subgrupos -->
      <v-list-group v-if="option.subgroups && option.subgroups.length > 0" always-show-expand-icon :value="option.title">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :prepend-icon="option.icon" :title="option.title" link @click="EnviarOpcionMenu(option)"></v-list-item>
        </template>
        <template v-for="(subgroup, sgIndex) in option.subgroups" :key="`sg-${sgIndex}`">
          <v-list-group v-if="subgroup.subgroups && subgroup.subgroups.length > 0" sub-group :prepend-icon="subgroup.icon">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="subgroup.title" link></v-list-item>
            </template>
            <v-list-item
              v-for="(subsubgroup, ssgIndex) in subgroup.subgroups"
              :key="`ssg-${ssgIndex}`"
              :title="subsubgroup.title"
              :prepend-icon="subsubgroup.icon"
              link
              @click="EnviarOpcionMenu(subsubgroup)"
            ></v-list-item>
          </v-list-group>
          <v-list-item v-else :title="subgroup.title" :prepend-icon="subgroup.icon" @click="EnviarOpcionMenu(subgroup)" link></v-list-item>
        </template>
      </v-list-group>
      <!-- Para opciones principales sin subgrupos, se asegura que el click ejecute EnviarOpcionMenu -->
      <v-list-item v-else :prepend-icon="option.icon" :title="option.title" @click="EnviarOpcionMenu(option)" link class="v-list-item--link"></v-list-item>
    </template>
  </v-list>
</template>



<script>
export default {
  data: () => ({
    menuOptions: [
      // Aquí irían otras opciones del menú si las hubiera...
      {
        title: "Inicio",
        icon: "mdi-home",
        ruta: "/home"
      },
      {
        title: "Pruebas",
        icon: "mdi-home",
        ruta: ""
      },      
      {
        title: "Administración",
        icon: "mdi-account-circle",
        subgroups: [
          { title: "Empresas", icon: "mdi-domain", ruta: "/empresas"},
          { title: "Usuarios", icon: "mdi-account-multiple", ruta: "" },
          { title: "Roles", icon: "mdi-account-key", ruta: "" }
        ],
        ruta: ""
      },
      {
        title: "SAP Integración",
        icon: "mdi-cloud-sync",
        subgroups: [
          { title: "Inventario", icon: "mdi-warehouse", ruta: "" },
          { title: "Pedidos", icon: "mdi-cart-outline", ruta: "" },
          {
            title: "Clientes",
            icon: "mdi-account-box",
            subgroups: [
              {
                title: "Crear",
                icon: "mdi-plus-box",
                ruta: ""
              },
              {
                title: "Eliminar",
                icon: "mdi-delete",
                ruta: ""
              }
            ],           
          }
        ]
      },
      {
        title: "Finanzas",
        icon: "mdi-finance",
        subgroups: [
          { title: "Estado de cuenta", icon: "mdi-bank", ruta: "" },
          { title: "Facturación", icon: "mdi-receipt", ruta: "" },
          { title: "Pagos y cobros", icon: "mdi-cash", ruta: "" }
        ]
      },
      {
        title: "Producción y Almacén",
        icon: "mdi-factory",
        subgroups: [
          { title: "Reportes de Ventas", icon: "mdi-chart-line", ruta: "" },
          { title: "Reportes de Compras", icon: "mdi-chart-bell-curve", ruta: "" },
          { title: "Reportes Financieros", icon: "mdi-chart-areaspline", ruta: "" }
        ]
      },
      {
        title: "Configuración y Personalización",
        icon: "mdi-cogs",
        subgroups: [
          { title: "Conexión con SAP", icon: "mdi-link-variant", ruta: "" },
          { title: "Personalización de la Interfaz", icon: "mdi-palette", ruta: "" },
          { title: "Configuración de notificaciones", icon: "mdi-bell-ring", ruta: "" }
        ]
      }
      // Aquí podrían añadirse más opciones según se necesite...
    ]
  }),
  methods: {
    EnviarOpcionMenu(opcion) {      
      console.log("interno")
      this.$emit("EjecutarMenu",opcion,)
    }
  }
};
</script>

<style scoped>

</style>

