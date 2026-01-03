const container = document.querySelector("#container");

const rainbowBtn = document.querySelector("#rainbowBtn")
let rainbowMode = false

function random255() {
  return Math.floor(Math.random() * 256);
}

function createGrid(size){
    container.innerHTML = "" // remove old grid

    const squareSize = 960 / size; // keeps total space same

    for (let i=0; i < size * size; i++){
        const sq = document.createElement("div");
        sq.classList.add("square");
        sq.style.width = `${squareSize}px`;
        sq.style.height = `${squareSize}px`

        container.appendChild(sq)
    }
}

createGrid(16)

function enableDrawing(){
    container.addEventListener("mouseover", (e)=>{
        if (!e.target.classList.contains("square")) return;
        if (rainbowMode){
            e.target.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
        } else {
            e.target.style.backgroundColor = "black";
        }
    });
}

// Toggle rainbow mode
rainbowBtn.addEventListener("click", () =>{
    rainbowMode = !rainbowMode;
    rainbowBtn.textContent = rainbowMode ? "Normal Mode" : "Rainbow Mode";
})


enableDrawing()



const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click",()=>{
    let size = Number(prompt("Enter grid size (max 100):",16))
    if (!size || size < 1) return;
    if (size > 100) size = 100;

    createGrid(size)
})


