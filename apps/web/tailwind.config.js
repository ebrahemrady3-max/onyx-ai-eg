module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#020817',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.2)',
      },
    },
  },
  plugins: [],
};
