import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F8',
        foreground: 'var(--foreground)',
        code: '#dd4a68',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
