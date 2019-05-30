// 异步
/* webpackChunkName:"loadash" */
// 下面这两句能直接引发bug，this不指向moudule了，变成了undefined
// 特地记录一下，后面去查一下怎么解决，总不可能说一个文件为了this重新指向window就不去import任何东西吧
// import './style.css';  // css in js
// import _ from 'lodash';

console.log(_.join(['a', 'b', 'c'], '*'));
console.log(_.join(['a', 'd', 'z'], ','));
console.log(this)
