<template>
  <div width="400" elevation="6">
    <v-list bg-color="#f2f7f2" >
      <template v-for="(option, index) in menuOptions" :key="index">
        <v-list-group v-if="option.subgroups && option.subgroups.length > 0" always-show-expand-icon :value="option.title">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="option.icon" :title="option.title" link></v-list-item>
          </template>
          <template v-for="(subgroup, sgIndex) in option.subgroups" :key="`sg-${sgIndex}`">
            <!-- Se añade un nuevo v-list-group para manejar subgrupos de segundo nivel -->
            <v-list-group v-if="subgroup.subgroups && subgroup.subgroups.length > 0" sub-group :prepend-icon="subgroup.icon">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :title="subgroup.title" link></v-list-item>
              </template>
              <!-- Se asegura que los ítems más internos sean clicables agregando la propiedad link -->
              <v-list-item
                v-for="(subsubgroup, ssgIndex) in subgroup.subgroups"
                :key="`ssg-${ssgIndex}`"
                :title="subsubgroup.title"
                :prepend-icon="subsubgroup.icon"
                link
              ></v-list-item>
            </v-list-group>
            <!-- Se asegura que los ítems de primer nivel de subgrupos sean clicables agregando la propiedad link -->
            <v-list-item v-else :title="subgroup.title" :prepend-icon="subgroup.icon" link></v-list-item>
          </template>
        </v-list-group>
        <!-- Se asegura que las opciones principales sin subgrupos sean clicables -->
        <v-list-item v-else :prepend-icon="option.icon" :title="option.title" class="v-list-item--link" link></v-list-item>
      </template>
    </v-list>
  </div>
</template>


<script>
export default {
  data: () => ({
    menuOptions: [
      // Aquí irían otras opciones del menú si las hubiera...
      {
        title: "Inicio",
        icon: "mdi-home"
      },
      {
        title: "Administración",
        icon: "mdi-account-circle",
        subgroups: [
          { title: "Usuarios", icon: "mdi-account-multiple" },
          { title: "Roles", icon: "mdi-account-key" }
        ]
      },
      {
        title: "SAP Integración",
        icon: "mdi-cloud-sync",
        subgroups: [
          { title: "Inventario", icon: "mdi-warehouse" },
          { title: "Pedidos", icon: "mdi-cart-outline" },
          {
            title: "Clientes",
            icon: "mdi-account-box",
            subgroups: [
              {
                title: "Crear",
                icon: "mdi-plus-box"
              },
              {
                title: "Eliminar",
                icon: "mdi-delete"
              }
            ]
          }
        ]
      },
      {
        title: "Finanzas",
        icon: "mdi-finance",
        subgroups: [
          { title: "Estado de cuenta", icon: "mdi-bank" },
          { title: "Facturación", icon: "mdi-receipt" },
          { title: "Pagos y cobros", icon: "mdi-cash" }
        ]
      },
      {
        title: "Producción y Almacén",
        icon: "mdi-factory",
        subgroups: [
          { title: "Reportes de Ventas", icon: "mdi-chart-line" },
          { title: "Reportes de Compras", icon: "mdi-chart-bell-curve" },
          { title: "Reportes Financieros", icon: "mdi-chart-areaspline" }
        ]
      },
      {
        title: "Configuración y Personalización",
        icon: "mdi-cogs",
        subgroups: [
          { title: "Conexión con SAP", icon: "mdi-link-variant" },
          { title: "Personalización de la Interfaz", icon: "mdi-palette" },
          { title: "Configuración de notificaciones", icon: "mdi-bell-ring" }
        ]
      }
      // Aquí podrían añadirse más opciones según se necesite...
    ]
  })
};
</script>

<style scoped>
.menu-lateral {
  top: 100px;
  left: 0;
  height: cal(100%-65px); /* Ajusta la altura para que ocupe toda la ventana visible */
  z-index: 100; /* Asegúrate de que se muestre por encima de otros elementos */
  overflow-y:auto;
  scrollbar-width: none; /* Para Firefox */
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */  
}
</style>