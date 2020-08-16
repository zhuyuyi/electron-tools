const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
// const SftpWebpackPlugin = require('sftp-webpack-plugin'); // 上传sftp
const path = require("path");
const projectPath = path.dirname(__dirname);


const testConfig = {
    mode:'production',
    output:{
        path:path.resolve(__dirname,"./../beta"),
        filename:"[name].[hash].js",
        hashDigestLength:8,
        publicPath: '/'
    },
    //打包新增map文件，development（cheap-module-eval-source-map）production(cheap-module-source-map)
    devtool:'cheap-module-source-map',
    plugins:[
        // new SftpWebpackPlugin({
        //     port: '3600',
        //     host: '106.15.75.142',
        //     username: 'root',
        //     password: 'zyy.0912',
        //     from: `${projectPath}/beta`,
        //     to: '/home/demowork'
        // })
    ]
}
module.exports = merge(baseConfig,testConfig);