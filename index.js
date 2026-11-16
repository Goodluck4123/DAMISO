let slide = 0
let firstButton = document.getElementById("firstButton")
let secondButton = document.getElementById("secondButton")
let imagesInSlide = document.getElementsByClassName("houseImages")

secondButton.addEventListener("click", (event) => {
    
    if (slide == 6) {
        imagesInSlide[slide].style.display = "none"
        slide = 0
        imagesInSlide[slide].style.display = "block"
    } else {
        imagesInSlide[slide].style.display = "none"
        slide++ 
        imagesInSlide[slide].style.display = "block"
    }
}) 

firstButton.addEventListener("click", (event) => {
    if (slide == 0) {
        imagesInSlide[slide].style.display = "none"
        slide = 6
        imagesInSlide[slide].style.display = "block"
    } else {
        imagesInSlide[slide].style.display = "none"
        slide-- 
        imagesInSlide[slide].style.display = "block"
    }
})

let intervalForSlide = setInterval(() => {
    if (slide == 6) {
        imagesInSlide[slide].style.display = "none"
        slide = 0
        imagesInSlide[slide].style.display = "block"
    } else {
        imagesInSlide[slide].style.display = "none"
        slide++ 
        imagesInSlide[slide].style.display = "block"
    }
}, 5000)

document.getElementById("housesSlideShow").addEventListener("mouseover", (event) => {
    clearInterval(intervalForSlide)
})

document.getElementById("housesSlideShow").addEventListener("mouseout", (event) => {
    intervalForSlide = setInterval(() => {
    if (slide == 6) {
        imagesInSlide[slide].style.display = "none"
        slide = 0
        imagesInSlide[slide].style.display = "block"
    } else {
        imagesInSlide[slide].style.display = "none"
        slide++ 
        imagesInSlide[slide].style.display = "block"
    }
}, 5000)
})


