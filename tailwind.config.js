/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",        // Todas las rutas dentro de la carpeta app
    "./components/**/*.{js,jsx,ts,tsx}", // Todas las rutas dentro de la carpeta components
    "./hooks/**/*.{js,jsx,ts,tsx}",      // Archivos de hooks si aplican clases de Tailwind
    "./constants/**/*.{js,jsx,ts,tsx}",  // Por si defines estilos en archivos constantes
  ],
  theme: {
    extend: {
      colors: {
        "principal": "#008170", // Color personalizado
      },
    },
  },
  plugins: [],
}
