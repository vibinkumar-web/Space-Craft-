/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        surface: "#111827",
        accent: {
          glow: "#38BDF8",
          gold: "#FACC15",
        },
        headings: "#E5E7EB",
        body: "#9CA3AF",
      },
      fontFamily: {
        sans: ['Inter', 'serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}
