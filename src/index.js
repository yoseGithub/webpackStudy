import Count from './counter'
import Num from './num'
import './style.css'

let root = document.getElementById("root")
let countNum = new Count();
let num = new Num();

let countElm = document.createElement('div')

let btn = document.createElement('button')
btn.innerHTML = '新增'
root.appendChild(btn)
root.appendChild(countElm)
root.appendChild(num.block)

btn.onclick = function() {
    countNum.add()
    countElm.innerHTML = countNum.num

    let div = document.createElement('div')
    div.innerHTML = 'item'
    root.appendChild(div)
}

if(module.hot) {
    module.hot.accept('./num', () => {
        // console.log(num)
        // num.reset()
        
        root.removeChild(num.block)
        num = new Num();
        root.appendChild(num.block)
    })
}