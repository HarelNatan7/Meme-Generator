'use strict'

let gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['trump', 'angry'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['cute', 'dogs', 'pets'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['baby', 'cute', 'dogs', 'pets'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['cute', 'cat', 'pets', 'sleep'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['cute', 'baby', 'angry'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['smart', 'explain', 'history'] }
]

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
            {
                    txt: 'PlaceHolder',
                    size: 20,
                    align: 'center',
                    color: 'white'
                }
            ]
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

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }