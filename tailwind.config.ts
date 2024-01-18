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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'gradient-header':
          'linear-gradient(46deg, var(--color-green) 60%, rgba(65, 67, 74, 1) 96%, rgba(65, 67, 74, 1) 96%)',
      },
      colors: {},
    },
  },
  plugins: [],
}
export default config
