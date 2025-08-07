
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
    'X','O','',
    '','','',
    '','','X'
];
let turn = 'X';
let winner = false;
let tie = false;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
console.log('message Element:',messageEl);

/*-------------------------------- Functions --------------------------------*/
const init = () =>{
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
        messageEl.textContent = 'in Progress'
    }else if(tie === true){
        messageEl.textContent = 'Tie'
    }else{
        messageEl.textContent = 'Congrats you Win'
    }
   
}
const handleClick = (event) =>{
    const squareIndex = event.target.id;
    console.log(squareIndex);
    if(board[squareIndex] !== '' || winner){
        return
    }
    placePiece(squareIndex);
    render();
}

const placePiece = (index) =>{
    board[index] = turn
    console.log(board);
}

const checkForWinner = () =>{
    // if()
}



/*----------------------------- Event Listeners -----------------------------*/
addEventListener("load", init)
squareEls.forEach(square => {
square.addEventListener("click", handleClick);
});



