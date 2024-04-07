let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties:0};
        let scoreLabel = document.querySelector('.js-score');
        let userStatusLabel = document.querySelector('.js-user-status');
        let userGameResult = document.querySelector('.js-game-result');
        let intervalID;
        let isAutoPlaying = false;
        let autoplayBtnElement = document.querySelector('.btn-autoplay');

        scoreLabel.innerHTML = `Player: ${score.wins} Computer: ${score.losses} Ties: ${score.ties}`
        
        document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            playGame('rock');
        });
        document.querySelector('.js-paper-button')
        .addEventListener('click',() => {
            playGame('paper');
        });
        document.querySelector('.js-scissor-button')
        .addEventListener('click',() => {
            playGame('scissor');
        });

        //Clear button
        document.querySelector('.btn-newgame')
        .addEventListener('click',() => {
            clearScore();
        });

        document.body.addEventListener('keypress',(event)=>{
            if (event.key === 'r') {
                playGame('rock');
            } else if (event.key === 'p') {
                playGame('paper');
            } else if(event.key === 's') {
                playGame('scissor');
            } else if (event.key === 'a'){
                autoplayGame();
            } 
        })
        //Autoplay button
        autoplayBtnElement.addEventListener('click',()=>{
            autoplayGame();
        });
        
        function playGame(playerMove) {

            const computerMove = pickComputerMove();

            if (playerMove == 'rock') {
                if(computerMove == 'paper') {
                    result = 'You lose';
                } else if (computerMove == 'scissor') {
                    result = 'You win';
                } else {
                    result = 'Tie';
                }
                
            } else if (playerMove == 'paper') {
                if(computerMove == 'scissor') {
                    result = 'You lose';
                } else if (computerMove == 'rock') {
                    result = 'You win';
                } else {
                    result = 'Tie';
                }
                
            } else if (playerMove == 'scissor') {
                if(computerMove == 'rock') {
                    result = 'You lose';
                } else if (computerMove == 'paper') {
                    result = 'You win';
                } else {
                    result = 'Tie';
                }      
            }

            scoreCheck(result);
            localStorage.setItem('score',JSON.stringify(score));
            
             userStatusLabel.innerHTML = result;
             userGameResult.innerHTML = `You <img src="img/${playerMove}.png" class="result-img">  :  <img src="img/${computerMove}.png" class="result-img"> Computer`;
             scoreLabel.innerHTML = `Player: ${score.wins} Computer: ${score.losses} Ties: ${score.ties}`;
        }

        function scoreCheck(winnerResult) {
        
            if (winnerResult === "You win") {
                score.wins += 1;
            } else if (winnerResult === "You lose") {
                score.losses += 1;
            } else if (winnerResult === "Tie") {
                score.ties += 1;
            }
        }

        function pickComputerMove(){
            const randNum = Math.random()
            let computerMove = "";

            if(randNum > 0 && randNum < 1/3) {
                computerMove = 'rock';}
            else if (randNum > 1/3 && randNum < 2/3) {
                computerMove = 'paper';}
            else if (randNum > 2/3 && randNum < 1) {
                computerMove = 'scissor';}

            return computerMove;
        }
 
        function clearScore() {  
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            scoreLabel.innerHTML = `Player: ${score.wins} Computer: ${score.losses} Ties: ${score.ties}`
            userStatusLabel.innerHTML = "";
            userGameResult.innerHTML = "";
            
        }

        function autoplayGame() {
            
            if(!isAutoPlaying) {
                intervalID = setInterval(() =>{
                    playerAuto = pickComputerMove();
                    playGame(playerAuto);

                }, 1000);

                isAutoPlaying = true;
                autoplayBtnElement.innerHTML = 'Stop autoplay';
                autoplayBtnElement.classList.add('auto-playing');

            } else {
                clearInterval(intervalID);
                isAutoPlaying = false;
                autoplayBtnElement.innerHTML ='Autoplay';
                autoplayBtnElement.classList.remove('auto-playing');
            }
        }

   