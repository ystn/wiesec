module.exports = {
  content: ['./components/**/*.{ts,tsx,js,jsx}', './screens/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
