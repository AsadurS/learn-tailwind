module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/img/hero-bg.png')",
      
       })
    },
    boxShadow: {
      '4xl': '0 45px 70px -18px rgba(0, 0, 0, 0.5)',
    
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
