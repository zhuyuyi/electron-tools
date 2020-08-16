const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const path = require("path");



const testConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "./../beta"),
        filename: "js/[name].[hash].js",
        hashDigestLength: 8,
        publicPath: 'http://106.15.75.142/home/demowork/'
    },
    //打包新增map文件，development（cheap-module-eval-source-map）production(cheap-module-source-map)
    devtool: 'cheap-module-source-map'
}
module.exports = merge(baseConfig, testConfig);