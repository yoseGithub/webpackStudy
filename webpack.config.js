const path = require('path');  //引入node 的 path 核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

/* commonJS语法 */
module.exports = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    devServer: {
          // --watch webpack监听打包文件
        contentBase: './dist',
        open: true,
        proxy: {  // 接口代理
            '/api': 'http://localhost:80'
        },
        hot: true,     //webpack-dev-server开启热更新
        hotOnly: true  //html没生效，浏览器不刷新
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')  //__dirname指的是webpack.config.js这个文件所在的路径
    },
    module: {
        rules: [  //模块打包规则
            {
                test: /\.js$/,
                exclude: /node_modules/,  // 如果代码是在node-modules，则排除
                loader: "babel-loader",   //webpack与babel的桥梁，并不会进行解析
                options: {
                    // 业务代码
                    presets: [['@babel/preset-env', {  // 解析es6语法
                        useBuiltIns: 'usage',          // 或 "entry"
                        corejs: 3,
                        targets: {
                            chrome: "30"
                        } 
                    }]]
                    // 写类库的时候
                    // npm install --save-dev @babel/plugin-transform-runtime  // 不会污染全局环境，会以闭包的形式去注入对应的内容
                    // npm install --save @babel/runtime
                    // npm install --save @babel/runtime-corejs2 //如果corejs改成2，这里需要安装corejs2
                    // 'plugins': [["@babel/plugin-transform-runtime"],{
                    //     "corejs": 2,
                    //     "helps": true,
                    //     "regenerator": true,
                    //     "useESModules": false
                    // }]
                    // 当配置太多的时候，可以建立一个.babelrc文件，把babel中的options丢过去
                }
            },{
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
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    "css-loader",
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}