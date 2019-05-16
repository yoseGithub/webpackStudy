class StaticDiv {
    constructor () {
        this.num = 2000
        this.block = document.createElement('div')
        this.block.innerHTML = this.num
    }
    // reset () {
    //     this.block.innerHTML = this.num
    // }
}

export default StaticDiv