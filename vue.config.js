// webpack config
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const resolve = (dir) => {
    return path.join(__dirname, dir);
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProd ? '/vn-admin/' : '/',
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            require('unplugin-vue-components/webpack')({
                resolvers: [NaiveUiResolver()]
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: isProd ? 'server' : 'disabled'
            })
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icon'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}