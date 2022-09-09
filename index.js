const colorPalette = document.querySelector("#color-palette")
const myPalette = document.querySelector("#my-palette")
const generate = document.querySelector("#generate")

const addColor = (event) => {
    const color = event.target.style.backgroundColor
    const newSquare = document.createElement("div")
    newSquare.classList.add("square")
    newSquare.style.backgroundColor = color
    myPalette.appendChild(newSquare)
}


const makePalette = (event) => {

    while (colorPalette.firstChild) {
        colorPalette.removeChild(colorPalette.firstChild)
    }

    for (i = 0; i < 150; i++) {
        //create a div
        const square = document.createElement("div")
        //add class of "square"
        square.classList.add("square")
        //add square to color-palette
        colorPalette.appendChild(square)
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const color = `rgb(${red}, ${green}, ${blue})`
        square.style.backgroundColor = color
        square.addEventListener("click", addColor)
    }
}
document.addEventListener("DOMContentLoaded", makePalette)
generate.addEventListener("click", makePalette)

