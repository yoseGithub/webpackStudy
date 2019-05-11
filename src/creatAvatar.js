import style from './index.scss'

class createAvatar {
    constructor (root, imgSrc) {
        this.img = new Image()
        this.img.src = imgSrc
        this.img.classList.add(style.avatarHash)
        root.append(this.img)
    }
}

export default createAvatar