<template>
  <v-app>
    <v-container id="Contenedor">
      <v-card
        id="ContenedorLogin"
        width="320"
        class="mx-auto mt-5 Sombreado"
        align="center"
        justify="center"
      >
        <v-card-title>
          <h3 class="display-1">Bienvenido</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="d-flex flex-column justify-start">
            <v-text-field
              label="Login"
              prepend-icon="mdi-account-circle"
              class="mt-5"
              v-model="cLogin"
              @focus="bAlerta = false"
              style="width: 252px;"
            />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="cPassword"
              @focus="bAlerta = false"
              style="width: 290px;"
            />
            <v-btn
              id="Boton"
              class="mt-2"
              block
              @click="Saludar"
              style="font-weight: bold; text-transform: none"
            >
              Usando Login/Password</v-btn
            >
            <v-btn class="d-flex flex-row justify-start mt-2" style="background-color:rgb(66,133,244);padding:0px;">
              <v-img
                :src="logoGoogle"
                width="30"
                class="ml-2"
                style="background-color:rgb(66,133,244);border-radius:3px;"
              ></v-img>
              <span class="ml-2" style="text-transform:none; color:white;font-family: Arial, Helvetica, sans-serif;"> Iniciar sesión con Google</span>
            </v-btn>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>

      <!-- Alerta de login inválido -->
      <v-alert
        type="error"
        v-if="bAlerta"
        icon="mdi-cloud-alert"
        transition="scale-transition"
        max-height="60"
        class="mt-5"
      >
        {{ cTextoAlerta }}
      </v-alert>
      <!-- Alerta de login inválido -->
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "gLoginFancy",
  data() {
    return {
      showPassword: false,
      bAlerta: false,
      cLogin: "",
      cTextoAlerta: "",
      cPassword: String,
      logoGoogle: new URL('../assets/images/logogoogle.png', import.meta.url).href,
    };
  },

  created() {
  },

  methods: {
    Saludar() {
      console.log("Hola - cLogin: ", this.cLogin, " cPassword: ", this.cPassword);
      console.log("Valoracion OR ", this.cLogin || this.cPassword);
      if (this.cLogin == "") {
        this.bAlerta = true;
        this.cTextoAlerta = "Debe introducir un login y un password";
      }
      if (!this.bAlerta && this.cPassword == "") {
        this.bAlerta = true;
        this.cTextoAlerta = "Debe introducir un password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/gescel.scss";

h3 {
  color: $VerdeGescel;
  font-weight: bold;
}

#Contenedor {
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
}

.Sombreado {
  border-style: solid;
  border-radius: 5%;
  border: 2px solid #ddd;
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.27);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.27);
}

#Boton {
  background: $Verde;
  color: white;
}

#LogoGescel {
  width: 140px;
  height: 140px;
}
#input-0 {
  background-color: red;
}
</style>
