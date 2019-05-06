// ES modudule 模块引入方式
import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js'

let root = document.getElementById("root")

let header = new Header(root)
let content = new Content(root)
let sidebar = new Sidebar(root)