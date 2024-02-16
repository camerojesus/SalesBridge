<template>
  <div class="login-container">
    <v-card
      id="ContenedorLogin"
      width="320"
      class="mx-auto Sombreado"
      align="center"
      justify="center"
    >
      <v-card-title>
        <h3 class="display-1">Bienvenido</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="d-flex flex-column justify-start">
          <!-- Seleccionar empresa -->
          <p style="font-weight:bold;font-size:18px;" class="mb-2">Empresa</p>
          <v-select label="Select" :items="aNombreEmpresas"></v-select>
          <!-- Seleccionar empresa -->

          <v-text-field
            label="Login"
            prepend-icon="mdi-account-circle"
            class="mt-5"
            v-model="cLogin"
            @focus="bAlerta = false"
            style="width: 252px"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="cPassword"
            @focus="bAlerta = false"
            style="width: 290px"
          />
          <v-btn
            id="Boton"
            class="mt-2"
            block
            @click="enviarLogin"
            style="font-weight: bold; text-transform: none"
          >
            Usando Login/Password</v-btn
          >
          <v-btn
            class="d-flex flex-row justify-start mt-2"
            style="background-color: rgb(66, 133, 244); padding: 0px"
            v-if="false"
          >
            <v-img
              :src="logoGoogle"
              width="30"
              class="ml-2"
              style="background-color: rgb(66, 133, 244); border-radius: 3px"
            ></v-img>
            <span
              class="ml-2"
              style="
                text-transform: none;
                color: white;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              Iniciar sesión con Google</span
            >
          </v-btn>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>

    <v-snackbar
      v-model="bNotificacion"
      :timeout="nTimeout"
      :color="cColorNotificacion"
      elevation="24"
      @input="bNotificacion = false"
    >
      <span style="color: rgb(230, 232, 252); font-weight: bold">{{
        cMensajeNotificacion
      }}</span>
    </v-snackbar>
    <!-- Notificaciones al usuario -->
  </div>
</template>

<script>
import oGescel from "../services//gescel.js";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      bAlerta: false,
      cLogin: "",
      cTextoAlerta: "",
      cPassword: "",
      logoGoogle: new URL("../assets/images/logogoogle.png", import.meta.url).href,
      cServidor: oGescel.cServidor,
      bNotificacion: false,
      nTimeout: 2000,
      cColorNotificacion: "light-green",
      cMensajeNotificacion: "",
      aEmpresas: [],
      aNombreEmpresas: [],
    };
  },

  async created() {
    this.aEmpresas = await oGescel.CargarEmpresas();
    this.ExtraerNombreEmpresas();
  },

  methods: {
    ExtraerNombreEmpresas() {
      this.aNombreEmpresas = this.aEmpresas.map((empresa) => empresa.nombreEmpresa);
    },

    bValidarLogin() {
      if (this.cLogin === "" || this.cPassword === "") {
        this.cMensajeNotificacion = "Debe ingresar un login y password";
        this.cColorNotificacion = "#FA008F";
        this.bNotificacion = true;
        return false;
      }
      return true;
    },

    async enviarLogin() {
      if (!this.bValidarLogin()) {
        return;
      }
      const url = this.cServidor + "/login";
      try {
        const response = await axios.post(url, {
          login: this.cLogin,
          password: this.cPassword,
        });
        // Maneja la respuesta con el JWT
        if (response.data && response.data.token) {
          // solicitud exitosa CON TOKEN
          this.loginStatus = "autenticado";
          // Almacena el JWT para su uso en futuras solicitudes
          localStorage.setItem("userToken", response.data.token);
          // Configura el token como predeterminado para futuras solicitudes en Axios
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          // Redirigir al usuario a otra página
          this.loginStatus = "exitoso";
          this.cMensajeNotificacion = "Bienvenido";
          this.cColorNotificacion = "#3CA537";
          this.bNotificacion = true;
          this.$router.push({ name: "home" });
        } else {
          // solicitud exitosa SIN TOKEN (igualmente no autenticado)
          this.loginStatus = "fallido";
          this.cMensajeNotificacion = "Login o password equivocados, vuelta a intentar";
          this.cColorNotificacion = "#FA008F";
          this.bNotificacion = true;
        }
      } catch (error) {
        // CUALQUIER ERROR - INCLUYENDO ERRORES DE RED Y ERROR DE CREDENCIALES
        if (error.response.status === 401) {
          this.cMensajeNotificacion = "Login o password equivocados, vuelta a intentar";
          this.cColorNotificacion = "#FA008F";
          this.bNotificacion = true;
        } else {
          this.cMensajeNotificacion = "Error en la comunicación con el servidor";
          this.cColorNotificacion = "#e6726a";
          this.bNotificacion = true;
        }
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

#input-0 {
  background-color: red;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90%; /* Asegura que el contenedor tenga al menos la altura de la pantalla */
  width:100%;
}
</style>
