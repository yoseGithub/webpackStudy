class Header {
    constructor (root) {
        let header = document.createElement("div")
        header.innerHTML = "header"
        root.append(header)
    }
}

export default Header