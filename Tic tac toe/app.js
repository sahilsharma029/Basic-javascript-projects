const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");

let CurrentPlayer;
let GameGrid;
const winningPositions = [
    [0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

function InitGame(){
    CurrentPlayer = "X";
    GameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
    })
    newgamebtn.classList.remove("active");
    gameinfo.innerText = `Current Player - ${CurrentPlayer}`;
}

InitGame();

function checkGameOver() {
    let answer = "";
    winningPositions.forEach((position) => {
      if ((GameGrid[position[0]] !== "" || GameGrid[position[1]] !== "" || GameGrid[position[2]] !== "")
        && (GameGrid[position[0]] === GameGrid[position[1]] && GameGrid[position[1]] === GameGrid[position[2]])) {
        if(GameGrid[position[0]] === "X"){
            answer = "X";
        }
        else{
            answer = "0";
        }
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
      }

    });
    return answer;
  }


function swapturn(){
    if(CurrentPlayer === "X"){
        CurrentPlayer = "0";
    }
    else{
        CurrentPlayer = "X";
    }
    gameinfo.innerText = `Current Player - ${CurrentPlayer}`;
}
function handleclick(index){
    if(GameGrid[index] === ""){
        boxes[index].innerText = CurrentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapturn();
        checkgameover();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleclick(index);

    });
});

newgamebtn.addEventListener("click", InitGame);