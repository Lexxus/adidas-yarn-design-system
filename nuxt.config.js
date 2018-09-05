const readMarkdownFiles = require('./scripts/markdown-files.js');

const globalRoutes = [];

module.exports = {
  srcDir: './example',
  build: {
    vendor: [],
    plugins: []
  },
  head: {
    title: 'adidas YARN Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    bodyAttrs: {
      class: 'yarn'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  css: [
    './dist/yarn-logo.css',
    './dist/yarn-icon.css',
    './dist/yarn.css',
    '~/styles/style.less'
  ],
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/i18n.js'
  ],
  router: {
    linkExactActiveClass: 'active',
    extendRoutes(routes) {
      routes.forEach((route) => {
        let meta;

        try {
          meta = require(route.component.replace(/\.vue$/, '.meta.json'));
        } catch (e) {
          meta = {};
        }

        globalRoutes.push({
          ...route,
          meta
        });
      });
    }
  },
  generate: {
    dir: './docs'
  },
  env: {
    routes: globalRoutes,
    markdown: readMarkdownFiles('example/locales')
  }
};