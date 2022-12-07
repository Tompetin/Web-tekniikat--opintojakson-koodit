let images = [
    "https://picsum.photos/id/1/800",
    "https://picsum.photos/id/20/800",
    "https://picsum.photos/id/45/800",
    "https://picsum.photos/id/80/800",
    "https://picsum.photos/id/23/800",
]

let imageContainer = document.getElementById("img_container");
let lightBox = document.getElementById("lightbox");
lightBox.addEventListener("click", closeImage);

for(image of images){
    let img = document.createElement("img");
    img.src=image;
    document.body.appendChild(img);
    img.addEventListener("click", openImage);
}

/**
 * 
 * @param {Event} event 
 */
function openImage(event){
    let clickedImage = event.currentTarget;
    imageContainer.src = clickedImage.src;
    lightBox.classList.add("visible")
}

function closeImage(){
    lightBox.classList.remove("visible")
}

