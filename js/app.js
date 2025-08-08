
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.






/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    // horizontal win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical win
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win
    [0, 4, 8],
    [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
let board =[
    '','','',
    '','','',
    '','',''
];
let turn = 'X';
let winner = false;
let tie = false;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-btn')
console.log('message Element:',messageEl);

/*-------------------------------- Functions --------------------------------*/
const init = () =>{
    board =[
    '','','',
    '','','',
    '','',''
];
    console.log('Page Loaded');
    render();
};

const render = () =>{
    updateBoard();
    updateMessage();
}

const updateBoard = () => {
    squareEls.forEach((square, index) =>{
        square.textContent = board[index];
    })
}

const updateMessage = () => {
    if(winner === false && tie === false){
        messageEl.textContent = 'Game in Progress!'
    }else if(tie === true){
        messageEl.textContent = 'It is a Tie!'
    }else{
        messageEl.textContent = `Congrats Player ${turn} has won!`
    }
   
}
const handleClick = (event) =>{
    const squareIndex = event.target.id;
    console.log(squareIndex);
    if(board[squareIndex] !== '' || winner){
        return
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
}

const placePiece = (index) =>{
    board[index] = turn
    console.log(board);
}

const checkForWinner = () =>{
    // first index winning arrays
    if(board[0] !== '' && board[0] === board[1] && board[0] === board[2] ){
        return winner = true;
    }
    else if(board[0] !== '' && board[0] === board[3] && board[0] === board[6] ){
        return winner = true;
    }
    else if(board[0] !== '' && board[0] === board[4] && board[0] === board[8] ){
        return winner = true;
    }
    else if(board[3] !== '' && board[3] === board[4] && board[3] === board[5] ){
        return winner = true;
    }
    else if(board[1] !== '' && board[1] === board[4] && board[1] === board[7] ){
        return winner = true;
    }
    else if(board[2] !== '' && board[2] === board[4] && board[2] === board[6] ){
        return winner = true;
    }
    else if(board[6] !== '' && board[6] === board[7] && board[6] === board[8] ){
        return winner = true;
    }
    else if(board[2] !== '' && board[2] === board[5] && board[2] === board[8] ){
        return winner = true;
    }else{
        return winner = false;
    }
    
  
}

const checkForTie = () =>{
    if(winner){
        return
    }
    board.forEach(element =>{
        if(element === ''){
             tie =false;
           
        }else{
             tie =true;
        }
    }) 
    console.log(tie);

}


const switchPlayerTurn = () =>{
    if(winner === true){
        return
    }if(turn === 'X'){
        turn = 'O'
    }else{
        turn = 'X'
    }
    console.log(turn);

}

/*----------------------------- Event Listeners -----------------------------*/
addEventListener("load", init)
squareEls.forEach(square => {
square.addEventListener("click", handleClick);
});
resetBtnEl.addEventListener('click', init)


