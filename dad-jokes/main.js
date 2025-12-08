const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

generate();

jokeBtn.addEventListener('click', generate)

async function generate(){
  const config = {
    headers: {
    'Accept':'application/json' 
    }
  }
  try {
    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeEl.innerText = data.joke;
  } catch(err){
    console.log("Error:", err);
  }
}