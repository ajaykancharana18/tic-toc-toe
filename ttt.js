const boxes = document.querySelectorAll('.box');
const msg  = document.querySelector('#msg');
const msgContainer  = document.querySelector('.msg-container');
const resBtn = document.querySelector('#reset-btn');
const newBtn = document.querySelector('#new-btn');
let playerO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    playerO = true;
    msgContainer.classList.add("hide");
    enable();
}
const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

resBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(playerO){
            box.innerText = "O";
            playerO = false;
        }
        else{
            box.innerText = "X";
            playerO = true;
        };
            box.disabled = true;
            checkWinner();  

    })
});


   const showWinner = (winner)=>{
        msg.innerText = `winner is ${winner} `;
        msgContainer.classList.remove("hide");
        disable();
    }
 const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    } 

 };  


