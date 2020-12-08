const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // 打包分析工具
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'js/[name].[contenthash].js',
        hashDigestLength: 8,
        publicPath: '/',
    },
    //打包新增map文件，development（cheap-module-eval-source-map）production(cheap-module-source-map)
    // devtool:'cheap-module-source-map',
    plugins: [new BundleAnalyzerPlugin(), new CleanWebpackPlugin()],
};
module.exports = merge(baseConfig, prodConfig);
