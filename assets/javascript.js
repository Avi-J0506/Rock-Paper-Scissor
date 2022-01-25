const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen .classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }
    const playMatch = ()=>{
        let options = document.querySelectorAll(".options button")
        let playerHand = document.querySelector(".player-hand")
        let computerHand = document.querySelector(".computer-hand")
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend',function(){
                this.style.animation = "";
            })
        })
        const computerOptions = ['rock','paper','scissor'];

        options.forEach((option) => {
            option.addEventListener('click',function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]
                console.log(computerChoice);

               setTimeout(()=>{
                compareHands(this.textContent, computerChoice);
                playerHand.src =`./assets/images/${this.textContent}.png`
                computerHand.src =`./assets/images/${computerChoice}.png`
               },2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        });
    }  

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie"
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissor'){
                winner.textContent = 'Jeet gaya Laude'
                pScore++
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Hehe chutiya'
                cScore++
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissor'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Jeet gaya Laude'
                pScore++
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Hehe chutiya'
                cScore++
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Jeet gaya Laude'
                pScore++
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Hehe chutiya'
                cScore++
                updateScore();
                return;
            }
        }
    }
    startGame();
    playMatch();
}

game()
