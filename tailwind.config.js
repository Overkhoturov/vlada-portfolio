/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'tablet': '700px',
        'hd': '1200px',
        'full-hd': '1800px',
        '2k': '2400px',
        '4k': '3400px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'headline-large-strong': ['2.625rem', { lineHeight: '3.125rem', letterSpacing: '0%', fontWeight: '600' }],
        'headline-medium-strong': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '0%', fontWeight: '600' }],
        'headline-small-strong': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0%', fontWeight: '600' }],
        'headline-extra-small-strong': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0%', fontWeight: '500' }],
        
        'display-medium-strong': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0%', fontWeight: '500' }],
        'display-small-strong': ['1.375rem', { lineHeight: '2.25px', letterSpacing: '0%', fontWeight: '500' }],
        
        'body-medium': ['1rem', { lineHeight: '1.625rem', letterSpacing: '0%', fontWeight: '400' }],
        'body-medium-strong': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0%', fontWeight: '500' }],
        'body-small-strong': ['0.875rem', { lineHeight: '1.375rem', letterSpacing: '0%', fontWeight: '500' }],
      },
      colors: {
        'primary': {
          100: '#FFFFFF',
          200: '#F7F8FC',
          300: '#E9EBF0',
          400: '#BABCC0',
          500: '#58606B',
          700: '#122036',
          800: '#0C1625',
          900: '#01080C',
          opacity: {
            100: 'rgba(255, 255, 255, 0.08)',
            900: 'rgba(1, 8, 12, 0.08)',
          }
        },
        secondary: {
          400: '#2A81F2',
          fixed: '#2A81F2',
          opacity: {
            4: 'rgba(52,91,251,0.04)',
            8: 'rgba(52,91,251,0.08)',
            12: 'rgba(52,91,251,0.12)',
          }
        },
        shadow: {
          light: 'rgba(255, 255, 255, 0.04)',
          dark: 'rgba(18, 32, 54, 0.04)',
          'dark-medium': 'rgba(18, 32, 54, 0.12)',
        }
      },
      boxShadow: {
        'inner-100-small': 'inset 4px 4px 8px 0px rgba(255, 255, 255, 0.04), inset -4px -4px 8px 0px rgba(255, 255, 255, 0.04)',
        'drop-800-small': '4px 4px 8px 0px rgba(18, 32, 54, 0.04), -4px -4px 8px 0px rgba(18, 32, 54, 0.04)',
        'drop-800-medium': '4px 4px 16px 0px rgba(18, 32, 54, 0.12), -4px -4px 16px 0px rgba(18, 32, 54, 0.12)',
      },
      backdropBlur: {
        'medium': '32px',
      },
    },
  },
  plugins: [],
}

