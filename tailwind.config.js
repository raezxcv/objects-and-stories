/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: '#FAF8F5',       // Warm Alabaster / Ivory
        linen: '#F3EFEA',        // Subtle Field / Raw Linen
        stone: {
          light: '#EBE7E0',
          DEFAULT: '#E2DDD5',    // Pale Dolomite / Stone border
          dark: '#C8C2B7',
        },
        taupe: {
          DEFAULT: '#8F877C',    // Weathered Taupe
          muted: '#A8A196',
          dark: '#6E675F',
        },
        ink: {
          light: '#7A756D',
          medium: '#4A463F',     // Deep Umber / Ash body copy
          DEFAULT: '#181816',    // Mineral Charcoal
        },
        terracotta: {
          DEFAULT: '#B25B38',    // Editorial Terracotta Accent
          muted: '#964828',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Libre Bodoni"', 'Georgia', 'serif'],
        display: ['"Libre Bodoni"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      },
      lineHeight: {
        'tightest': '1.05',
        'editorial': '1.15',
      }
    },
  },
  plugins: [],
}
