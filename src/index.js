// 同步
// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '*'));
// console.log(_.join(['a', 'd', 'z'], ','));

// 异步
/* webpackChunkName:"loadash" */
// 魔法注释，给打包文件起名

function getComponent() {
    return import(/* webpackChunkName:"loadash" */ 'lodash').then(({ default: _}) => {
        let elm = document.createElement('div');
        elm.innerHTML = _.join(['Dell', 'Lee'], '-');
        return elm
    })
}

getComponent().then(elm => {
    document.getElementById('root').appendChild(elm);
})