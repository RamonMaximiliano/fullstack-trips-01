//Tailwind já vem por default com next.js

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:"#590BD8",
        primaryHover:"#853cfa",
        primaryLighter:"#DDD5EA",
        primaryDarker:"#312A4F",
        grayPrimary:"#717171",
      },
      textColor:{
        dark:"#717171",
      }
    },
  },
  plugins: [],
}
export default config
