const tictactoe = [
    ['','',' '],
    [' ',' ',' '],
    [' ',' ',' ']]


const divContainer = document.querySelector('.container');
let html = ''
let turn = 'X'

for (let i = 0;i<tictactoe.length;i++){
    column = tictactoe[i]
    str = ''
    for(let x = 0; x<column.length; x++) {
        str += `<button class='js-button'>${column[x]}</button>`
    } 
    html += str + '<br>'
}

divContainer.innerHTML = html

buttonAll = document.querySelectorAll('.js-button')
console.log(buttonAll)

buttonAll.forEach((data,index)=>{
    data.addEventListener('click',()=> {
        
        if(turn === 'X'){
            data.innerHTML = 'X'
            turn = 'O'
            
        } else{
            data.innerHTML ='O'
            turn = 'X'
        }
    },{ once: true })
})


function checkWinner(combination){

}


// const testArr = [
//     ['X','O','O'],
//     ['X','X','X'],
//     ['O','O','X']]


    
// // Vertical Combo
// for(let i = 0; i<testArr.length; i++){
//     let combination = '';
//     for( let x = 0; x<testArr[i].length;x++){
//         combination += testArr[x][i]
//     }
//     if(combination === 'XXX' || combination === 'OOO') {
//         console.log('You win!')
//     }
// }

// // Horizontal Combo
// testArr.forEach((data)=>{
//     let combination = '';
//     data.forEach((value)=> {
//         combination += value;
//     });

//     if(combination === 'XXX' || combination === 'OOO') {
//         console.log('You win!')   
//     }
// })


// //Diagonal Combo
// // testArr.forEach((data,index)=>{
// //     let combination
// //     combination += data[index]
    
// // })




//     // testArr.forEach((data,index)=>{
//     //     // let combination = '';
//     //     console.log(data[index])
        
//     // })