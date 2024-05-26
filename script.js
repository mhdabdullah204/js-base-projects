const clock = document.getElementById('clock');




setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
clock.style.color = 'black';
clock.style.fontFamily = 'bold'
},1000)