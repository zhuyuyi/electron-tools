const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 打出单独的css包
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = {
    entry: {
        index: './src/main.js',
        another: './src/another-module.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            automaticNameDelimiter: '.',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'], //babel-loader高版本对应新的预设 @babel/preset-env和@babel/preset-react
                            plugins: [
                                [
                                    '@babel/plugin-proposal-class-properties',
                                    {
                                        loose: true,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: 'electron-tools-[local]-[hash:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: 'electron-tools-[local]-[hash:5]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
                // 增加 'less-loader' ，注意顺序
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 10 * 1024,
                    },
                },
            },
            //处理 html 代码中 <img src="..."/> 的形式
            {
                test: /\.html$/,
                use: 'html-withimg-loader',
            },
        ],
    },
    plugins: [
        //创建入口文件html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|ja/),
        new MiniCssExtractPlugin({
            filename: 'css/index.[hash].css',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './../src'), // 这样@符号就表示项目根目录中src这一层路径
        },
    },
};
