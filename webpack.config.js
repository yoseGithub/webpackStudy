const path = require('path');  //引入node 的 path 核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/* commonJS语法 */
module.exports = {
    mode: "none",
    // entry: {
    //     main: './src/index.js'
    // },
    entry: './src/index.js',  //当入口文件只有一个的时候，可以这样简写，默认chunk是main
    output: {
        filename: 'bundle.js',  //文件名
        path: path.resolve(__dirname, 'dist')  //__dirname指的是webpack.config.js这个文件所在的路径
    },
    module: {
        rules: [  //模块打包规则
            {
                test: /\.(woff|eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',  //打包出来的图片名称是原图片名称跟后缀
                        outputPath: 'icon-font/'         //打包到css文件夹下，如果没有会创建该文件夹
                    }
                }
            },{
                test: /\.(jpg|png|gif)$/,
                use: {
                    // 会把图片返回成base64位文件，省了HTTP请求，但是增加了js大小
                    // 如果图片比较小可以使用url-loader
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',  //打包出来的图片名称是原图片名称跟后缀
                        outputPath: 'images/',        //打包到images文件夹下，如果没有会创建该文件夹
                        limit: 2048  //是否小于2KB
                    }
                }
            },{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        // 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader。
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,    // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            modules: true     // css模块化，这个时候全局的 import index.sass将会失效
                        }
                    },
                    'sass-loader',
                    'postcss-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'      // 以index.html作为html模板
        }),
        new CleanWebpackPlugin()         // 打包之前删除dist目录，现在的新版是直接取output路径，不需要自己来写删除哪个打包后的文件
    ]
}