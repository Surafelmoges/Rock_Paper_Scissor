const score = (JSON.parse(localStorage.getItem('score'))) || {
  wins: 0,
  losses: 0,
  ties : 0,
};



let computerSelect = '';

  function pickcomputerMove(){
      const randomNumber = Math.random();
      
      if(randomNumber >= 0 && randomNumber <= 1/3){
          computerSelect = 'Rock';
      }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
          computerSelect = 'Paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
          computerSelect = 'Scissor';
      }
      return computerSelect;
  }
document.querySelector('.js-rock-btn')
.addEventListener('click',() => {
    playGame('Rock');
});

document.querySelector('.js-paper-btn')
.addEventListener('click',()=>{
    playGame('Paper');
});

document.querySelector('.js-sc-btn')
.addEventListener('click',()=>{
    playGame('Scissor');
})


  function playGame(playerMove){
      let computerSelect =pickcomputerMove();
          let result = '';
                  if(playerMove === 'Rock'){
                  
                      if(computerSelect === 'Rock')
                      {
                      result = 'Tie.';
                      }else if(computerSelect === 'Paper'){
                      result = 'You Lose.';
                      }
                      else if(computerSelect === 'Scissor'){
                      result = 'You Win.';
                      }
                  }
                  
                  else if(playerMove === 'Paper'){
                      if(computerSelect === 'Rock')
                          {
                          result = 'You Win.';
                          }else if(computerSelect === 'Paper'){
                          result = 'Tie.';
                          }
                          else if(computerSelect === 'Scissor'){
                          result = 'You Lose.';
                          }
                      }
                          else if(playerMove === 'Scissor'){
                              if(computerSelect === 'Rock')
                              {
                              result = 'You Win.';
                              }else if(computerSelect === 'Paper'){
                              result = 'You Lose.';
                              }
                              else if(computerSelect === 'Scissor'){
                              result = 'Tie.';
                              }

                          }
                          if(result === 'You Win.'){
                              score.wins  += 1;

                          }else if(result === 'You Lose.'){
                              score.losses +=1;
                          }else if(result === 'Tie.'){
                              score.ties +=1;
                          }
                          localStorage.setItem('score',JSON.stringify(score));
            
                          updateScore();
                          
                          document.querySelector('.js-move').innerHTML =result;

                          document.querySelector('.js-result')
                          .innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="img-btn">
<img src="images/${computerSelect}-emoji.png"class="img-btn">
computer`;                     
                                            
          }
         
      function updateScore(){
       document.querySelector('.js-display')
       .innerHTML =` Wins =${score.wins} Losses =${score.losses} Ties =${score.ties}`;
      }
          

      

      