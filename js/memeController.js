'use strict'
let gElCanvas
let gCtx

function onInIt() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    // addListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = "50px arial";
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth - 70
    gElCanvas.height = elContainer.offsetHeight - 70
}

function onSelectMeme(selectedMeme) {
    // document.querySelector('.memes-container').classList.add('none')
    let meme = getMeme(selectedMeme)
    console.log('meme:', meme)
    renderMeme(meme)
    }

function renderMeme(meme) {
    const imgId = meme.selectedImgId
    console.log('imgId:', imgId)
    const img = getImg(imgId)
    console.log('img:', img)
    renderImg(img.url)
    drawText('Hello', (gElCanvas.width/2), 40)
}

function setLineTxt(val) {
    console.log('val:', val)
}