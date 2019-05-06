class Sidebar {
    constructor (root) {
        let sidebar = document.createElement("div")
        sidebar.innerHTML = "sidebar"
        root.append(sidebar)
    }
}

export default Sidebar