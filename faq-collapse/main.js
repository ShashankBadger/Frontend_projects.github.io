const buttons = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

buttons.forEach((button, index) => {

  button.addEventListener('click', () => { 
    faqs[index].classList.toggle('active');
  });  

});