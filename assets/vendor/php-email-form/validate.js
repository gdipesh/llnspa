
// chat gpt's code
// $('#contact-form').submit((event)=>{
//   event.preventDefult();
//   $.ajax
// })

  "use strict";

const form = document.getElementById('contact-form');

// adda submit event listener to the form 

form.addEventListener('submit', (event)=>{
  event.preventDefault(); // Prevent the form from being submitted 

  // get the form data 
  const data = new FormData(form);

  //  send a post request to formspree 
  const xhr = new XMLHttpRequest();

  xhr.open('POST','https://formspree.io/f/meqwqqjp');
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onload =()=>{
    if(xhr.status === 200){

      document.querySelector('.sent-message').classList.add('d-block');
      form.reset();
    }else{
      document.querySelector('.sent-message').classList.remove('d-block');
      document.querySelector('.error-message').classList.add('d-block');
      
    }


  };
xhr.send(data);
})