/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#09090b",
        ember: "#fb923c",
        lava: "#f97316",
        blush: "#ef4444",
        mist: "#fff7ed",
        panel: "rgba(24, 24, 27, 0.72)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(249, 115, 22, 0.22)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(249,115,22,0.28), transparent 38%), radial-gradient(circle at 20% 20%, rgba(239,68,68,0.18), transparent 26%)",
      },
    },
  },
  plugins: [],
};
