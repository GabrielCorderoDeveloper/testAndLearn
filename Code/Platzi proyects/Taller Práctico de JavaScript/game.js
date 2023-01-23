const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

//The game will load after HTML has been loaded
window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);

    elementsSize = canvasSize / 10;
    startGame();
}

function startGame() {

    game.font = elementsSize/1.2 + "px Verdana";
    game.textAling = "end"
    let rest = elementsSize * 1.07;

    const map = maps[0];
    const mapRows = maps[0].trim().split("\n");
    const mapRowCols = mapRows.map(row => row.trim().split(""));


    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <=10; col++ ){
            game.fillText(mapRowCols[row][col], (elementsSize * col) - rest, (elementsSize * row) - 10);
        }
    }
}