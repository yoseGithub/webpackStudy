// Tree Shaking 只支持 ES Module
// 只支持静态引入
// "sideEffects": false
// "sideEffects": ["@babel/polyfill", "*.css"]
// 开发环境tree shaking并不会把代码删除，只会出现提示
/*! exports provided: add, minus */
/*! exports used: add */


import { add } from './match.js';

add(1, 2);