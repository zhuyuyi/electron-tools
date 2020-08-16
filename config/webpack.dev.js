const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    //webpack-dev-server配置本地服务器，并配置跨域
    devServer: {
        contentBase: path.join(__dirname, "./../dev"),
        port: 7000, // 本地服务器端口号
        hot: true, // 热重载
        inline: true,
        historyApiFallback: true, // :对于单页面程序，浏览器的brower histroy可以设置成html5 history api或者hash
        proxy: {
            '/api/*': {
                target: 'http://localhost:8888', // 目标服务器地址
                secure: false, // 目标服务器地址是否是安全协议
                changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
            }
        }
    },
    //tree-shaking标记无相关联的代码（开发环境）
    optimization: {
        usedExports: true
    }
}
module.exports = merge(baseConfig, devConfig);