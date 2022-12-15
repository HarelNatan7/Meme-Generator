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

function onSelectMeme(selectedMeme) {
    document.querySelector('.gallery').classList.add('none')
    setImg(selectedMeme)
    renderMeme()
}

function renderMeme() {
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    renderImg()
    drawText(meme.lines[currLine].txt, (gElCanvas.width / 2), 40)
}

function renderImg() {
    const currImg = getImg()
    const img = new Image()
    img.src = currImg.url
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gCurrStrokeColor
    gCtx.fillStyle = gCurrFontColor
    gCtx.font = "70px impact" // `${fontSize}px ${fontFamily}` ;
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onAddLine() {
    addLine()
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    drawText(meme.lines[currLine].txt, (gElCanvas.width / 2), gElCanvas.height - 40)
}

function setLineTxt() {
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    console.log('currLine:', currLine)
    let text = document.querySelector('.text-input').value
    gMeme.lines[currLine].txt = text
    renderMeme()
}

function onSetFontColor(val) {
    setFontColor(val)
    renderMeme()
}

function onSetStrokeColor(val) {
    setStrokeColor(val)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}