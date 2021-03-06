const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const baseConfig = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/,  // 如果代码是在node-modules，则排除
                use: {loader: 'babel-loader'}   //webpack与babel的桥梁，并不会进行解析
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
            }
        ]
    },
    performance: false,  // 不提示性能警告
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: "chunkName"
        },
        splitChunks: {
            chunks: "all",  // "async"只对异步代码进行打包 "initial"同步
            minSize: 30000,  // 大于30k，正确应该是30720才是30k，进行代码分割
            minChunks: 1,  // 当模块被引入至少一次
            maxAsyncRequests: 5,  // 只能同时加载5个代码块，大于5的时候，前5个会分割
            maxInitialRequests: 3,  // 首页（入口文件）最多只能分割3个
            automaticNameDelimiter: '~',  // 文件名，组和文件名直接的拼接符
            name: true,  // 打包生成的文件名是否有效，如果true则走cacheGroups中的规则命名
            cacheGroups: {  // 缓存组，不会直接打包文件，会把符合组条件的文件打包成一个模块
                vendors: {  // 匹配组名，会给打包文件前面加vendors~入口名
                    test: /[\\/]node_modules[\\/]/,  // 检测是否是在node_modules中
                    priority: -10,  // 优先级，当某个模块同时满足多个组的时候，按照优先级进行分配打包
                    name: "vendors"
                    // filename: 'vendors.js'  // 会让上面的 automaticNameDelimiter 失效
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,  //如果一个模块已经被打包过，则不再打包
                    // filename: 'common.js'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'  //猜测，这个是根据package.json目录？
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({  // 自动加载模块，全局垫片
            _: 'lodash'
        })
    ],
}

module.exports = (env) => {
    if(env.dev) return merge(baseConfig, devConfig);
    if(env.prod) return merge(baseConfig, prodConfig);
}