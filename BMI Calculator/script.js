//Background color changing

const button = document.querySelectorAll('.btn');
const body = document.querySelector('body');

button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target)

        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = 'red';
                body.style.color = 'white'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                body.style.color = 'black'
                break; case 'green':
                body.style.backgroundColor = 'green';
                body.style.color = 'white'
                break; case 'black':
                body.style.backgroundColor = 'black';
                body.style.color = 'white'
                break; case 'blue':
                body.style.backgroundColor = 'blue';
                body.style.color = 'white'
                break;
                break; case 'white':
                body.style.backgroundColor = 'white';
                body.style.color = 'black'
                break;
            default:
                break;
        }

    })

})

// Now working on form

const form = document.querySelector('form');
form.addEventListener('submit' ,  function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if(height === ''  || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height} `;
   } 
  else if(weight === ''  || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter valid weight ${weight} `;
   } else{
   const bmi =  (weight/((height*height)/1000)).toFixed(2);
   

   results.innerHTML = `<span>Your BMI ${bmi}</span>`;


   switch (true) {
    case (bmi <= 18.6):
        results.innerHTML = `<span>Under  Weight ${bmi}</span>`;
        break;
   
    case (bmi >= 18.6 && bmi < 24.9):
        results.innerHTML = `<span>Normal Range ${bmi}</span>`;
        break;
   
    case (bmi >= 24.6):
        results.innerHTML = `<span>Overweight  ${bmi}</span>`;
        break;
   
    default:
        break;
   }
}
});
