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
          'linear-gradient(to bottom right, var(--color-green) 20%, var(--color-light-blue) 46%, var(--color-light-yellow) 86%)',

        'fiction-header':
          'linear-gradient(to top right, var(--color-green) 40%, var(--color-light-yellow) 75%)',
        'book-details':
          'linear-gradient(to top right, var(--color-green), 30%, var(--color-light-blue) 50%, var(--color-light-yellow) 96%)',
      },
      colors: {},
    },
  },
  plugins: [],
}
export default config
