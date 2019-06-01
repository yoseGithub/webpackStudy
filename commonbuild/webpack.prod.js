const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // css拆分成单文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');  // css压缩

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name]_[contenthash].js',     // 入口文件命名
        chunkFilename: '[name]_[contenthash].js' // 入口文件引入的chunk文件命名
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
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
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
                map: {
                    // 不生成内联映射,这样配置就会生成一个source-map文件
                    inline: false,
                    // 向css文件添加source-map路径注释
                    // 如果没有此项压缩后的css会去除source-map路径注释
                    annotation: true
                }
            }
		})
    ],
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({})]
    }
}

module.exports = prodConfig;