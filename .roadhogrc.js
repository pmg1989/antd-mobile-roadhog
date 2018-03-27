const path = require('path')
const pxtorem = require('postcss-pxtorem')
const { version } = require('./package.json')
const { PROXY_HOST } = require('./src/utils/config')

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  theme: "./theme.config.js",
  hash: true,
  publicPath: `/${version}/`,
  outputPath : `./dist/${version}/`,
  // outputPath: `./dist/deploy/`,
  proxy: {
    "/api": {
      "target": PROXY_HOST,
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    },
  },
  autoprefixer: {
    browsers: [
      "iOS >= 8",
      "Android >= 4"
    ]
  },
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }],
    ["module-resolver", {
      root: ["./src"],
      alias: {
        components: `${__dirname}/src/components`,
        utils: `${__dirname}/src/utils`,
        config: `${__dirname}/src/utils/config`,
        services: `${__dirname}/src/services`,
        constants: `${__dirname}/src/constants`,
        actions: `${__dirname}/src/actions`,
        svg: `${__dirname}/src/svg`,
        images: `${__dirname}/src/public/images`,
        themes: `${__dirname}/src/themes`,
      }
    }]
  ],
  define: {
    'process.env': {},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
  },
  env: {
    development: {
    },
    production: {
    }
  }
}
