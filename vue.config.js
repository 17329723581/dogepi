const path = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: {
    
    resolve: {
        alias: {
            // 在css中引入其他css，使用 @ 时，前面需要加上 ~
            'views': '@/views',
            'assets': '@/assets',
            'styles': '@/styles',
            'utils': '@/utils',
            'abis': '@/abis',
            'plugins': '@/plugins',
        }
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/variable.less")],
    },
  },
  productionSourceMap: false,
};
