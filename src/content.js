class Content {
    constructor (root) {
        let content = document.createElement("div")
        content.innerHTML = "content"
        root.append(content)
    }
}

export default Content