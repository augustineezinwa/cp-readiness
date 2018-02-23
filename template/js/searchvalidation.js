
button1.onclick = () => {

  if(input1.value.trim()) {
      
    alert(`You just typed: ${input1.value}`);

  } else {
    
    warn.style.display ="";

    warn.style.color ="red";

    input1.style.borderColor ="red";

    warn.innerHTML = '* please type some text to search';

    alert('Please type some text to search');

    }
    
  }

 input1.onfocus = () => {

    warn.style.display = "none";

    input1.style.borderColor ="";

 }
 


button2.onclick = () => {
    
    button1.onclick();
    
}

