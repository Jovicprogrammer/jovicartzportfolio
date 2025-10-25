// tailwind.config.js
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ajuste esses caminhos pro seu projeto!
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babado: "#FF80AB",
        luxo: "#4B0082",
        sombra: "#1E1E2F",
      },
    },
  },
  darkMode: "class", // se quiser dark mode
};

export default config;
