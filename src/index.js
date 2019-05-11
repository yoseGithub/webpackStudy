// ES modudule 模块引入方式
import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js'
import './index.scss'
import avatar from './avatar.jpg'
import createAvatar from './creatAvatar.js';

let root = document.getElementById("root")

let header = new Header(root)
let content = new Content(root)
let sidebar = new Sidebar(root)
let jsAppendAvatar = new createAvatar(root, avatar)

let img = new Image()
img.src = avatar
img.classList.add('avatar')
root.append(img)

let iconFont = document.createElement("span")
iconFont.classList.add("icf", "icf-search")
root.append(iconFont)