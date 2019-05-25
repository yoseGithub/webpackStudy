const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

const devConfig = {
    mode: "development",  // production
    devtool: 'cheap-module-eval-source-map',
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
    module: {
        rules: [{
            {
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
                    'postcss-loader'
                ]
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    "css-loader",
                    'postcss-loader'
                ]
            }
        }]
    }
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        
    }
}

module.exports = merge(commonConfig, devConfig);