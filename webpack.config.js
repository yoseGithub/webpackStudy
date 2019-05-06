const path = require('path');  //引入node 的 path 核心模块

/* commonJS语法 */
module.exports = {
    entry: './src/index.js',  //入口文件
    output: {
        filename: 'bundle.js',  //文件名
        path: path.resolve(__dirname, 'dist')  //__dirname指的是webpack.config.js这个文件所在的路径
    }
}