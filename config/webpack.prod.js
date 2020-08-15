const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.base.js");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const prodConfig = {
    mode:'production',
    //打包新增map文件，development（cheap-module-eval-source-map）production(cheap-module-source-map)
    devtool:'cheap-module-source-map',
    plugins:[
        new BundleAnalyzerPlugin()
    ]
}
module.exports = merge(commonConfig,prodConfig);