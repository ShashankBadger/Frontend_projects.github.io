const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((button, index) => {

  button.addEventListener('click', () => { 
    button.parentNode.classList.toggle('active');
  });  

});