// ES modudule 模块引入方式
import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js'
import avatar from './avatar.jpg'
import './index.scss'

let root = document.getElementById("root")

let header = new Header(root)
let content = new Content(root)
let sidebar = new Sidebar(root)

let img = new Image()
img.src = avatar
img.classList.add('avatar')
root.append(img)