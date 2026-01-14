/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'desktop': '1270px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          accent: "#10b981",
          neutral: "#1f2937",
          "base-100": "#fafafa",
          "base-200": "#ffffff",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        dark: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          accent: "#10b981",
          neutral: "#e8eaed",
          "base-100": "#0f1419",
          "base-200": "#1a1f26",
          "base-300": "#2a3340",
          "base-content": "#e8eaed",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
  },
}
