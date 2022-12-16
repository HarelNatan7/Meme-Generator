'use strict'

let gMeme
let gCurrFontColor = 'white'
let gCurrStrokeColor = 'black'
let gCurrFontFamily = 'impact'
let gCurrFontSize
let gIdLine = 0

const gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['trump', 'angry'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['cute', 'dogs', 'pets'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['baby', 'cute', 'dogs', 'pets'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['cute', 'cat', 'pets', 'sleep'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['cute', 'baby', 'angry'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['smart', 'explain', 'history'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['smart', 'explain', 'history'] }
]

function onSearch(val) {
console.log('val:', val)
}

function createMeme(img) {
    let elCanvas = getElCanvas()
    gMeme = {
        selectedImgId: img.id,
        img,
        selectedLineIdx: 0,
        lines: [
            {
                id: gIdLine++,
                txt: 'PlaceHolder',
                size: gCurrFontSize,
                align: 'center',
                color: gCurrFontColor,
                stroke: gCurrStrokeColor,
                family: gCurrFontFamily,
                x: elCanvas.width / 2,
                y: 40,
                rectSize: {
                    pos: { x: 0, y: 55 - gCurrFontSize },
                    height: 65,
                    width: elCanvas.width - 40
                },
            }
        ]
    }
    console.log('gElCanvas.width:', gElCanvas.width)
    console.log('gCurrFontSize:', gCurrFontSize)
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    drawText(gMeme.selectedLineIdx)
}

function addLine(isLines) {
    if (isLines) gIdLine = 0
    if (gMeme.lines.length === 1 && gMeme.lines[0].text === '') return
    let elCanvas = getElCanvas()
    let lineHeight = (gMeme.lines.length === 1) ? elCanvas.height - 40 : elCanvas.height / 2
    if (gMeme.lines.length === 0) lineHeight = 50
    gMeme.lines.push({
        id: gIdLine++,
        txt: '',
        size: gCurrFontSize,
        align: 'center',
        color: gCurrFontColor,
        stroke: gCurrStrokeColor,
        family: gCurrFontFamily,
        x: elCanvas.width / 2,
        y: lineHeight,
        rectSize: {
            pos: { x: 0, y: (lineHeight + 15) - gCurrFontSize},
            height: 65,
            width: elCanvas.width - 40
        }
    })
    if (!isLines) gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function changeLinesId(meme) {
    meme.lines.forEach((line, idx) => line.id = idx)
    gIdLine = gMeme.lines.length
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function getImg() {
    return gImgs.find(img => gMeme.selectedImgId === img.id)
}

function setFontColor(val) {
    gCurrFontColor = val
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.color = gCurrFontColor
}

function setStrokeColor(val) {
    gCurrStrokeColor = val
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.stroke = gCurrStrokeColor
}

function increaseFont(val) {
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.size += val
}

function decreaseFont(val) {
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.size += val
}

function setFamily(val) {
    gCurrFontFamily = val
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.family = gCurrFontFamily
}

function setAlign(val) {
    let elCanvas = getElCanvas()
    let currLine = gMeme.lines[gMeme.selectedLineIdx]
    switch (val) {
        case 'left':
            currLine.align = val
            currLine.x = 50
            break
        case 'center':
            currLine.align = val
            currLine.x = elCanvas.width / 2
            break
        case 'right':
            currLine.align = val
            currLine.x = elCanvas.width - 50
            break
    }
}

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }