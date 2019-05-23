// 同步
// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '*'));
// console.log(_.join(['a', 'd', 'z'], ','));

// 异步
/* webpackChunkName:"loadash" */
// 魔法注释，给打包文件起名

// async function getComponent() {
//     const { default: _ } = await import(/* webpackChunkName:"loadash" */ 'lodash');
//     const elm = document.createElement('div');
//     elm.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return elm
// }

// document.addEventListener('click', () => {
//     getComponent().then(elm => {
//         document.getElementById('root').appendChild(elm);
//     })
// })

// 代码利用率最高，比起缓存更能让代码更优（代码覆盖率）
/* webpackPrefetch: true */
// 等待核心代码加载完成后，带宽空闲了才会去加载文件
/* webpackPrefetch: true */ 
// 

document.addEventListener('click', () => {
    import(/* webpackPrefetch: true, webpackChunkName: "click" */ './click.js').then(({default: func}) => {
        func();
    })
})