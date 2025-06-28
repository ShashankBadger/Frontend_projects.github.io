const outerDiv1 = document.querySelector('.container1');
const outerDiv2 = document.querySelector('.container2');


const myArray = ["",
  '<div class="inner-div"></div>',
  '<div class="inner-div"></div><div class="inner-div"></div>',
   '<div class="inner-empty"></div><div class="inner-empty"></div><div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div>' ,
   '<div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div>',
   '<div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div><div class="inner-empty"></div><div class="inner-div"></div>',
  '<div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div>'];

function refersh1(){
    const rand = Math.floor(Math.random()*6)+1;
    outerDiv1.classList.add("container-"+rand);
    outerDiv1.innerHTML = myArray[rand];
    console.log(rand)
    randValue = rand;
}

function refersh2(){
    const rand = Math.floor(Math.random()*6)+1;
    outerDiv2.classList.add("container-"+rand);
    outerDiv2.innerHTML = myArray[rand];
    console.log(rand)
    randValue = rand;
}



