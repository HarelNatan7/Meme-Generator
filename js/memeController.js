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

function renderImg() {
    // Draw the img on the canvas
    const currImg = getImg()
    const img = new Image()
    img.src = currImg.url
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
    setImg(selectedMeme)
    renderMeme()
    }

function renderMeme() {
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    renderImg()
    drawText(meme.lines[currLine].txt, (gElCanvas.width/2), 40)
}

function setLineTxt(val) {
    let text = document.querySelector('.text-input').value
    gMeme.lines[0].txt = text
    renderMeme()
}