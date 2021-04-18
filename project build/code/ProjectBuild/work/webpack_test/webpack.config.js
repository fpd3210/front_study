var path = require('path');   //node内置的模块用来去设置路径的
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件

module.exports = {
    mode: 'development',
    entry: './src/js/entry.js',  //入口文件的配置
    output: {                   //出口/输出的配置
        path: path.resolve(__dirname, 'dist/js'),
        publicPath : 'js/',//设置为index.html提供资源的路径,设置完后找所有的资源都会去当前目录下找。
        filename: 'bundle.js'   //输入文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist")/*,
        compress: true,
        port: 9000*/
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]
};