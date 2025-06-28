const score = JSON.parse(localStorage.getItem('coin')) || {Wins:0, Loss:0};
    const res = document.getElementById('res');
    const values = document.getElementById('computer-and-your');

    function Guess(yourValue){
      const comValue = Math.random() <= 0.5 ? 'Head' : 'Tail';
      if(yourValue === comValue){
        score.Wins += 1;
      } else {
        score.Loss += 1;
      }

      values.innerHTML = `You: ${yourValue} Computer: ${comValue}`;
      scores();
      let message = JSON.stringify(score);
      localStorage.setItem('coin',message);
    }
    function scores(){
      res.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Loss}`;
    }

    function reset(){
      score.Wins = 0;
      score.Loss = 0;
      localStorage.removeItem('coin');
      scores();
      values.innerHTML = '';
    }

    scores();