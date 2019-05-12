const path = require('path');  //引入node 的 path 核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/* commonJS语法 */
module.exports = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')  //__dirname指的是webpack.config.js这个文件所在的路径
    },
    module: {
        rules: [  //模块打包规则
            {
                test: /\.(woff|eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'icon-font/'
                    }
                }
            },{
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 2048  //是否小于2KB
                    }
                }
            },{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader',
                    'postcss-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ]
}