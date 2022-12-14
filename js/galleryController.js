'use strict'

function renderGallery() {
let elGallery =  document.querySelector('.memes-container')
let images = getImgs()
let strHTMLs = images.map(img => 
    `<div class="meme-img-container">
    <img id="${img.id}" class="meme-img" src="${img.url}" onclick="onSelectMeme(this.id)">
</div>`
    )
    elGallery.innerHTML = strHTMLs.join('')
}