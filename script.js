const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach(function(button){
   button.addEventListener('click' , function(e){

    console.log(e)
    console.log(e.target)

   
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = 'grey'  ;
            body.style.color = 'black'      
            break;
        case 'black':
            body.style.backgroundColor = 'black';
            body.style.color = 'white'    
            break;
        case 'blue':
            body.style.backgroundColor = 'blue'  ;
            body.style.color = 'white'      
            break;
        case 'orange':
            body.style.backgroundColor = 'orange' ;
            body.style.color = 'black'       
            break;
        case 'green':
            body.style.backgroundColor = 'green' ;
            body.style.color = 'white'       
            break;
        case 'purple':
            body.style.backgroundColor = 'purple' ;
            body.style.color = 'white'       
            break;
        case 'red':
            body.style.backgroundColor = 'red' ;
            body.style.color = 'white'       
            break;
        case 'yellow':
            body.style.backgroundColor = 'yellow' ;
            body.style.color = 'black'       
            break;
        case 'pink':
            body.style.backgroundColor = 'pink' ;
            body.style.color = 'black'   ;
             
            break;

        default:
            break;
    }

   })

})