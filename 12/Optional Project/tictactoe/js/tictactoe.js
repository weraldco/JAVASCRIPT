const objTable = ['','','','','','','','','',]
let playerTurn = 'X'
const tableContainer = document.querySelector('.container');

const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

printTable()


function printTable() {
    let html = ''
    objTable.forEach(values=> {
        html += `<div class='js-cell'>${values}</div>`    
    })
    
    tableContainer.innerHTML = html

    const buttonElement = document.querySelectorAll('.js-cell');
    buttonElement.forEach((value,index) => {
        value.addEventListener('click', ()=>{
            buttonClicked(index)
        }, { once:true });
    })

}

function buttonClicked(index) {
    objTable[index] = playerTurn
    changePlayer()
    printTable()
    checkWinner()
}

function changePlayer() {
    playerTurn = (playerTurn == 'X') ? 'O' : 'X'
    
}

function checkWinner(){
    for(let i = 0; i<WINNING_COMBINATIONS.length; i++){
        const combination = WINNING_COMBINATIONS[i];
        const sectionA = objTable[combination[0]];
        const sectionB = objTable[combination[1]];
        const sectionC = objTable[combination[2]];

        // console.log(`${sectionA}:${sectionB}:${sectionC}`)
        if(sectionA == "" || sectionB == "" || sectionC == "") {
            continue;
        }
        if(sectionA == sectionB && sectionB == sectionC) {
            console.log(`${playerTurn} wins!`)
        } else if (!objTable.includes("")) {
            console.log('Draw!')
        }
    }
}


