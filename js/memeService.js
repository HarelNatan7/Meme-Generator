'use strict'

let gCurrFontColor = 'white'
let gCurrStrokeColor = 'black'
let gCurrFontFamily = 'impact'
let gCurrFontSize = 70

let gImgs = [
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

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'PlaceHolder',
            size: 70,
            align: 'center',
            color: 'white'
        }
    ]
}

function addLine() {
    gMeme.selectedLineIdx++
    gMeme.lines.push({
        txt: 'New Line',
        size: 70,
        align: 'center',
        color: 'white'
    })
}

function setImg(selectedMeme) {
    gMeme.selectedImgId = selectedMeme
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
}

function setStrokeColor(val) {
    gCurrStrokeColor = val
}

function increaseFont() {

}

function decreaseFont() {

}

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }