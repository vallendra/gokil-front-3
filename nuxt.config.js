module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'go-kil-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front-End Stack of Go-Kil Web App' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'}
    ]
  },
  css: [
    '@/assets/scss/app.scss' // use our build, as entered via app.scss
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/moment', ['id']],
    ['@nuxtjs/bootstrap-vue', { css: false }],
    ['nuxt-validate', {
      lang: 'id'
    }],
  ],
  axios: {
    base: 'localhost',
    port: 3000,
    prefix: '/api'
    },
  auth: {
    strategies: {
      local: {
        endpoints: {
          // login:  { url: '/customers/sign_in' },
          // logout: { url: '/customers/sign_out', method: 'delete' },
          // user:   { url: '/customers/current' }

          login:  { url: '/users/sign_in' },
          logout: { url: '/users/sign_out', method: 'delete' },
          user:   { url: '/users/current' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/dashboard'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'babel-polyfill',
      'vue2-google-maps'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    },
  },
  plugins: [
    '~/plugins/vue2-google-maps',
    // { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/currency', ssr: false }
  ]
}

