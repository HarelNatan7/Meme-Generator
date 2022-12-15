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
    addListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function isLineClicked(ev) {
    let meme = getMeme()
    let x = ev.offsetX
    let y = ev.offsetY
    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        x = ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y = ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
    return meme.lines.find(line => 
        x > line.rectSize.pos.x && x < (line.rectSize.pos.x + line.rectSize.width)
            && y > line.rectSize.pos.y && y < (line.rectSize.pos.y + line.rectSize.height)
    )
}

function onDown(ev) {
    console.log('Down')
    if (!isLineClicked(ev)) return
    isDrag = true
    gElCanvas.style.cursor = 'grab'
}

function onMove(ev) {
    // console.log('Move')
    if (!isDrag) return
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    const pos = getEvPos(ev)
    const x = pos.x
    const y = pos.y
    drawText(meme.lines[currLine].txt, x, y)
}

function onUp() {
    console.log('Up');
    isDrag = false
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function renderMeme(selectedImg) {
    openEditor()
    let meme = getMeme()
    if (!meme) resizeCanvas()
    drawImg(selectedImg)
    meme = getMeme()
    if (!meme || !meme.lines.length) {
        createMeme(selectedImg)
        renderCanvas()
        return
    }
    meme.lines.forEach((line, idx) => drawText(idx, true))
}

function drawText(lineIdx, isPlaceHolder = false) {
    let meme = getMeme()
    let currLine = meme.lines[lineIdx]
    if (!isPlaceHolder) {
        renderCanvas()
        drawRect(currLine)
    }
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
    var width = gElCanvas.width
    var height = currLine.size
    gCtx.beginPath()
    gCtx.rect(x, y, width, height + 22)
    gCtx.fillStyle = '#aab7b87d'
    gCtx.fillRect(x, y, width, height + 22)
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

function onSwitchLine() {
    var meme = getMeme();
    if ((meme.selectedLineIdx === 0)) meme.selectedLineIdx = meme.lines.length - 1
    else meme.selectedLineIdx--
    renderCanvas()
    drawRect(meme.lines[meme.selectedLineIdx])
    document.querySelector('.text-input').value = meme.lines[meme.selectedLineIdx].txt
}

function onDeleteLine() {
    document.querySelector('.text-input').value = ''
    var meme = getMeme()
    if (meme.lines.length === 1 && meme.lines[0].text === '') return
    var currlineIdx = meme.selectedLineIdx
    meme.lines.splice(currlineIdx, 1)
    if (meme.lines.length) {
        renderCanvas()
        changeLinesId(meme)
        if (currlineIdx) {
            drawRect(meme.lines[currlineIdx - 1])
            meme.selectedLineIdx = currlineIdx - 1
        } else {
            drawRect(meme.lines[0])
            meme.selectedLineIdx = 0
        }
    } else {
        addLine(true)
        renderCanvas()
    }
}


function onAddLine() {
    document.querySelector('.text-input').value = ''
    document.querySelector('.text-input').focus()
    addLine(false)
}

function onSetFontColor(val) {
    setFontColor(val)
    renderCanvasAndRect()
}

function onSetStrokeColor(val) {
    setStrokeColor(val)
    renderCanvasAndRect()
}

function onIncreaseFont(val) {
    increaseFont(val)
    renderCanvasAndRect()
}

function onDecreaseFont(val) {
    decreaseFont(val)
    renderCanvasAndRect()
}

function onSetFamily(val) {
    setFamily(val)
    renderCanvasAndRect()
}
function onSetAlign(val) {
    setAlign(val)
    renderCanvasAndRect()
}

function getElCanvas() {
    return gElCanvas
}

function renderCanvasAndRect() {
    let meme = getMeme()
    renderCanvas()
    drawRect(meme.lines[meme.selectedLineIdx])
}

function openEditor() {
    var elEditor = document.querySelector('.editor')
    elEditor.classList.remove('none')
    var elEditor = document.querySelector('.gallery')
    elEditor.classList.add('none')
}

