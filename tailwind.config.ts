import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-800)',
        },
        secundary: {
          DEFAULT: 'var(--secundary)',
          100: 'var(--secundary-100)',
          200: 'var(--secundary-200)',
          300: 'var(--secundary-300)',
          400: 'var(--secundary-400)',
          500: 'var(--secundary-500)',
          600: 'var(--secundary-600)',
          700: 'var(--secundary-700)',
          800: 'var(--secundary-800)',
          900: 'var(--secundary-900)',
          1000: 'var(--secundary-1000)',
        },
      },
    },
  },
  plugins: [],
}
export default config
