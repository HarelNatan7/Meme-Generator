'use strict'

function renderGallery() {
let elGallery =  document.querySelector('.memes-container')
let images = getImgs()
let strHTMLs = images.map(img => 
    `<div class="meme-img-container">
    <img id="${img.id}" class="meme-img" src="${img.url}" onclick="renderMeme(this)">
</div>`
    )
    elGallery.innerHTML += strHTMLs.join('')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onShare() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format
    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    // Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
        .then(res => res.text())
        .then(url => {
            onSuccess(url)
        })
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderMeme)
}

function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = (event) => {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        img.onload = () => renderMeme(img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data 
}