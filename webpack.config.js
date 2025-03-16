const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件，指定 Webpack 开始打包的起点
    entry: './src/index.js',

    // 输出配置，定义打包后文件的输出位置和文件名
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },

    // 模式，可设置为 'development' 或 'production'
    // mode: 'development',

    // 模块规则，用于处理不同类型的文件
    module: {
        rules: [
            // 处理 JavaScript 文件
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 处理 CSS 文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 处理图片文件
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ]
    },

    // 插件配置，用于扩展 Webpack 的功能
    plugins: [
        // 自动生成 HTML 文件，并注入打包后的 JavaScript 文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    // 开发服务器配置，方便开发过程中的实时预览
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist')
    //     },
    //     port: 3000,
    //     open: true
    // }
};
