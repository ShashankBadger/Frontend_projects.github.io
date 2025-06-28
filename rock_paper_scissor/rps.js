const score = JSON.parse(localStorage.getItem('score')) || {wins:0, loss:0, ties:0};
    const res = document.getElementById("res");
    const you_img = document.getElementById("you_img");
    const com_img = document.getElementById("com_img");
    const status = document.getElementById('status');
    const both_move_image = document.getElementById("both_move_image")
    function gameOption(your_move, com_move) {
      if (your_move === com_move){
        status.innerHTML = 'Tie.';
        score.ties +=1;
        bothMoveImage(your_move, com_move);
      } else if ( your_move === "Rock" && com_move === "Scissor"){
        status.innerHTML = 'You win.';
        score.wins +=1;
        bothMoveImage(your_move, com_move);
      } else if(your_move === 'Paper' && com_move === 'Rock' ){
        status.innerHTML = 'You win.';
        score.wins +=1;
        bothMoveImage(your_move, com_move);
      } else if (your_move === 'Scissor' && com_move === 'Paper'){
        status.innerHTML = 'You win.';
        score.wins +=1;
        bothMoveImage(your_move, com_move);
      } else {
        status.innerHTML = 'You Loss.';
        score.loss += 1;
        bothMoveImage(your_move, com_move);
      }

      let message = JSON.stringify(score);
      localStorage.setItem("score", message);
    }

    function computer(){
      const com = Math.random();
      if(com >= 0 && com < 1/3){
        return "Rock";
      } else if (com >= 1/3 && com < 2/3){
        return "Paper";
      } else {
        return "Scissor";
      }
    }

    function bothMoveImage(you, com){
      both_move_image.innerHTML = `You <img id="you_img" src="./images/${you}.png" alt="your result"> <img id="com_img" src="./images/${com}.png" alt="com result"> Computer`;
      scores();
      
    }

    function scores(){
      res.innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
    }

    function reset(){
      score.wins = 0;
      score.loss = 0;
      score.ties = 0;
      both_move_image.innerHTML = "";
      status.innerHTML = "";
      scores();
      localStorage.removeItem('score');
    }
    scores();