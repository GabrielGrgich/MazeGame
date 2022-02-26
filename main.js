//Seeing if this works. Anything between comments can be scraped
let button1 = document.getElementById(`button1`)
button1.addEventListener(`click`, color)

function color() {
    this.style.backgroundColor = `blue`
}

let div1 = document.createElement(`div`)
div1.style.width = `30px`
div1.style.height = `30px`
div1.style.border = `2px solid aquamarine`
// Anything above can be scrapped