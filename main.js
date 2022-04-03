// might want to make divs for each section, and put the walls to each div, but this is just a suggestion

// a hack to get the walls just right; right-click the page, hit inspect, click on "body", select "parentDiv", click the wall that you want, and double click any property that you would like to change, click on the highlighted bit, and adjust as needed. Click the 'enter' key when done.

let parentDiv = document.getElementById(`parentDiv`)

// An object to store sections. Adjust as needed
let sections = {
    "section1": {
        "wall1": {
            "width": 20,
            "height": 80,
            "top": 0,
            "left": 0
        }
    }
}


// loops through the sections and generates a wall for every wall listed in the section
for (let section in sections) {
    for (let wall in sections[section]) {
        wall = sections[section][wall]
        generateWall(wall.width, wall.height, wall.top, wall.left)
    }
}

// generates the walls
function generateWall(width, height, top, left) {
    let newWall = document.createElement(`div`)
    parentDiv.appendChild(newWall)
    newWall.style.position = `absolute`
    newWall.style.backgroundColor = `grey`
    newWall.style.width = `${width}px`
    newWall.style.height = `${height}px`
    newWall.style.top = `${top}px`
    newWall.style.left = `${left}px`
}