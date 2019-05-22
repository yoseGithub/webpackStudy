// 同步
// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '*'));
// console.log(_.join(['a', 'd', 'z'], ','));

// 异步
/* webpackChunkName:"loadash" */
// 魔法注释，给打包文件起名

async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName:"loadash" */ 'lodash');
    const elm = document.createElement('div');
    elm.innerHTML = _.join(['Dell', 'Lee'], '-');
    return elm
}

document.addEventListener('click', () => {
    getComponent().then(elm => {
        document.getElementById('root').appendChild(elm);
    })
})