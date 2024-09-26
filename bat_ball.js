let scorestr=localStorage.getItem('Score');
    let score;
    if(scorestr!=undefined){
      score=JSON.parse(scorestr);
    }
    else{
     score={
      win:0,
      lost:0,
      tie:0,
    };
  }
     score.displayscore=function(){
        return `Won:${score.win}, Lost:${score.lost} , Tie:${score.tie}`;
      };
    function generateComputerChoice() {
      //This will generate random number between 0 and 3
      let randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
      } else {
        return 'Stump'
      }
    }
    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Bat') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Stump') {
          score.lost++;
          return 'Computer has won';
        }
      } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Bat') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Stump') {
          score.win++;
          return 'User won.';
        }
      } else {
        if (computerMove === 'Ball') {
          score.lost++
          return 'Computer has won';
        } else if (computerMove === 'Bat') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Stump') {
          score.tie++;
          return `It's a tie`;
        }
      }
    }
    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score',JSON.stringify(score));
      alert(`You have chosen ${userMove}. Computer choice is ${computerMove} 
      
      and ${result}
      ${score.displayscore()}`);
    }