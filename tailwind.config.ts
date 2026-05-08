import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0b1020',
        primary: '#4fd1ff',
        secondary: '#7c5cff',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(79,209,255,0.35)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(79,209,255,0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(124,92,255,0.15), transparent 30%)',
      },
    },
  },
  plugins: [],
} satisfies Config
