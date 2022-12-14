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
    // selectedImgId: 5,
    // selectedLineIdx: 0,
    // lines: [
    //         {
    //                 txt: 'I sometimes eat Falafel',
    //                 size: 20,
    //                 align: 'left',
    //                 color: 'red'
    //             }
    //         ]
}

function getMeme(id) {
    let meme = {
        selectedImgId: id,
        // selectedLineIdx: id,
        // lines: [
        //     {
        //         txt: 'I sometimes eat Falafel',
        //         size: 20,
        //         align: 'left',
        //         color: 'red'
        //     }
        // ]
    }
    return meme
}

function getImgs() {
    return gImgs
}

function getImg(imgId) {
    console.log('imgId:', +imgId)
    imgId = +imgId
    // console.log(gImgs[0].id);
    const image = gImgs.find(img => imgId === img.id)
    console.log('img:', img)
    return image
}

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }