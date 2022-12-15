'use strict'

let gElCanvas
let gCtx
let isDrag = false
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

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

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }


function renderMeme(selectedImg) {
    openEditor()
    let meme = getMeme()
    if (!meme) resizeCanvas()
    drawImg(selectedImg)
    meme = getMeme()
    if (!meme || !meme.lines.length) {
        createMeme(selectedImg)
        setImg(selectedImg)
        renderCanvas()
        return
    }
    meme.lines.forEach((line, idx) => drawText(idx))
}

function drawText(lineIdx) {
    let meme = getMeme()
    let currLine = meme.lines[lineIdx]
    // renderCanvas()
    drawRect(currLine)
    gCtx.lineWidth = 3
    gCtx.strokeStyle = currLine.stroke
    gCtx.fillStyle = currLine.color
    gCtx.font = `${currLine.size}px ${currLine.family}`;
    gCtx.textAlign = currLine.align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(currLine.txt, currLine.x, currLine.y)
    gCtx.strokeText(currLine.txt, currLine.x, currLine.y)
}

function drawRect(currLine) {
    var x = currLine.rectSize.pos.x
    var y = currLine.rectSize.pos.y
    var width =  gElCanvas.width
    var height = currLine.size
    gCtx.beginPath()
    gCtx.rect(x, y, width, height + 10)
    gCtx.fillStyle = '#aab7b87d'
    gCtx.fillRect(x, y, width, height + 10)
    gCtx.strokeStyle = 'gray';
    gCtx.stroke()
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    renderCanvas()
}

function renderCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    let meme = getMeme()
    if (meme) renderMeme(meme.img)
}

// function renderMeme() {
//     let meme = getMeme()
//     let currLine = meme.selectedLineIdx
//     renderImg()
//     drawText(meme.lines[currLine].txt, (gElCanvas.width / 2), 40)
// }

// function renderImg() {
//     const currImg = getImg()
//     const img = new Image()
//     img.src = currImg.url
//     gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
// }



function onSwitchLine() {

}

function onAddLine() {
    addLine()
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    drawText(meme.lines[currLine].txt, (gElCanvas.width / 2), gElCanvas.height - 40)
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

function getElCanvas() {
    return gElCanvas
}



function openEditor() {
    var elEditor = document.querySelector('.editor');
    elEditor.classList.remove('none');
    var elEditor = document.querySelector('.gallery');
    elEditor.classList.add('none');
}
// function onDown(ev) {
//     console.log('Down');
//     if (!isTextClicked(ev)) return
//     isDrag = true
// }

// function onMove(ev) {
//     console.log('Move');
//     if (!isDrag) return
//     let meme = getMeme()
//     let currLine = meme.selectedLineIdx
//     const pos = getEvPos(ev)
//     const x = pos.x
//     const y = pos.y
//     drawText(meme.lines[currLine].txt, x, y)
// }

// function onUp() {
//     console.log('Up');
//     isDrag = false
// }

// function getEvPos(ev) {
//     // Gets the offset pos , the default pos
//     let pos = {
//         x: ev.offsetX,
//         y: ev.offsetY,
//     }
//     // Check if its a touch ev
//     if (TOUCH_EVS.includes(ev.type)) {
//         //soo we will not trigger the mouse ev
//         ev.preventDefault()
//         //Gets the first touch point
//         ev = ev.changedTouches[0]
//         //Calc the right pos according to the touch screen
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//         }
//     }
//     return pos
// }