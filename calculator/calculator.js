let Calculation='';
let result = '';
const res = document.getElementById('Message');

function display(){
  res.innerHTML = Calculation;
}

function calculate(){
	result += eval(Calculation);
	res.innerHTML = result;
	Calculation=result;
	result = '';
}

function textClear(){
	Calculation='';
	res.innerHTML='';
}