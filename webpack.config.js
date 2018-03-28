const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { zhugeAppKey } = require('./src/utils/config')
const { version } = require('./package.json')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'

  if (production) {
    webpackConfig.plugins = webpackConfig.plugins.concat([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/public',
          to: '../',
        },
      ]),
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/entry.ejs`,
        filename: '../index.html',
        minify: {
          collapseWhitespace: true,
        },
        // hash: true,
        zhugeAppKey,
        serviceWorker: '/service-worker.js',
      }),
      new SWPrecacheWebpackPlugin({
        minify: true,
        cacheId: 'antd-mobile-roadhog',
        filename: 'service-worker.js',
        filepath: 'dist/service-worker.js',
        stripPrefix: 'dist/',
        replacePrefix: '/',
        navigateFallback: 'index.html',
        staticFileGlobs: [
          'dist/index.html',
          'dist/css/**.css',
          'dist/js/**.js',
          'dist/images/**.{jpg,png,gif}',
          `dist/${version}/static/**/**.{jpg,png,gif}`,
          `dist/${version}/**.css`,
          `dist/${version}/**.js`,
        ],
      }),
    ])
  } else {
    webpackConfig.plugins = webpackConfig.plugins.concat([
      new CopyWebpackPlugin([
        {
          from: 'src/public',
          to: webpackConfig.output.outputPath,
        },
      ]),
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/entry.dev.ejs`,
        filename: 'index.html',
        minify: false,
        // hash: true,
        zhugeAppKey,
        serviceWorker: '/service-worker.js',
      }),
    ])
  }

  return webpackConfig
}
