let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const disabledbox = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enablebox = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide");
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 === true)
        {
            box.innerHTML = 'O';
            turn0 = false;
        }
        else{
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
        
    })
})

const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner ${winner}`;
    // msg.classList.remove("hide");
}

const checkwinner = ()=>
{
    for(let pattern of winpattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos2val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                // msg.innerHTML = `Winner ${pos1val}`;
                showwinner(pos1val);
                disabledbox();
            }
        }
    }
}


const resetgame = () =>{
    turn0 = true;
    enablebox();
}


resetbtn.addEventListener("click",()=>{
    box.innerHTML = "";
})

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame);