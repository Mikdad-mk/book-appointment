import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1216px',
      },
      colors: {
        gray: {
          50: '#F5FAF9',
          100: '#EDF2F1',
          200: '#D9DEDD',
          300: '#C7CFCD',
          400: '#AEB5B4',
          500: '#929C9A',
          600: '#7F8786',
          700: '#646A69',
          800: '#4C524F',
          900: '#1D1F1E',
        },
        lime: {
          50: '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',
          400: '#A3E635',
          500: '#BEF264',
          600: '#65A30D',
          700: '#4D7C0F',
          800: '#365314',
          900: '#1A2E05',
        },
        teal: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#065F46',
          800: '#064E3B',
          900: '#022C22',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
      },
      spacing: {
        18: '4.5rem',
        62: '15.5rem',
        116: '29rem',
        128: '32rem',
      },
      fontFamily: {
        body: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '0.95' }],
        '6xl': ['3.75rem', { lineHeight: '0.95' }],
        '7xl': ['4.5rem', { lineHeight: '0.95' }],
        '8xl': ['6rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        xs: '-1.85px',
        sm: '-2.25px',
      },
      textColor: {
        body: '#1D1F1E',
      },
      boxShadow: {
        md: '0px 0px 0px 1px rgba(18, 105, 63, 0.08), 0px 1px 2px 0px rgba(87, 92, 86, 0.16), 0px 24px 24px -12px rgba(54, 74, 54, 0.06)',
      },
      animation: {
        'float1': 'float1 8s ease-in-out infinite',
        'float2': 'float2 10s ease-in-out infinite',
        'float3': 'float3 12s ease-in-out infinite',
        'float4': 'float4 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config