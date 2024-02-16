import axios from 'axios';

export function cObtenerNombreArchivo(rutaCompleta) {
    const partes = rutaCompleta.split('/');
    const nombreArchivo = partes[partes.length - 1];
    return nombreArchivo;    
  }

  export function funcionConsole(cString) {
    console.log(cString);
  }

  export function sanitizeText(inputText) {
    // Utilizamos una expresión regular para reemplazar cualquier carácter que no sea alfanumérico, espacio, "()", "-", "_" o "*"
    const sanitizedText = inputText.replace(/[^A-Za-z0-9\s()\-_*]/g, ' ');
  
    return sanitizedText;
  }  
  
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

export function sumar(a, b) {
    return a + b;
}

// Función para cargar empresas desde el servidor
async function CargarEmpresas() {
  try {
    const cURL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${cURL}/CargarEmpresas`);
    return response.data; // Retorna los datos de las empresas
  } catch (error) {
    console.error('Error al cargar las empresas:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
}

const oGescel = {
    cObtenerNombreArchivo,
    funcionConsole,
    cServidor: import.meta.env.VITE_API_URL,
    sanitizeText,
    saludar,
    sumar,
    CargarEmpresas,    
};

export default oGescel;