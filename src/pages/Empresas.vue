<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="client.name" :rules="nameRules" label="Nombre de la Empresa" required></v-text-field>
      <!-- Repetir para cada campo, ajustando v-model, rules, y label según corresponda -->
      <v-btn color="success" @click="saveClient">Guardar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';
//import clientService from '@/services/clientService';

export default {
  name: 'ClientForm',
  setup() {
    const valid = ref(false);
    const client = ref({
      // Inicializa todos los campos aquí
      name: '',
      // Repetir para cada campo
    });
    // Reglas de validación para cada campo
    const nameRules = [v => !!v || 'Nombre es requerido', /* Otras reglas según corresponda */];

    const saveClient = async () => {
      if (valid.value) {
        try {
          await clientService.saveClient(client.value);
          // Manejar éxito, como mostrar mensaje o redirigir
        } catch (error) {
          // Manejar errores de la petición
        }
      }
    };

    return {
      client,
      valid,
      nameRules,
      saveClient,
    };
  },
};
</script>
