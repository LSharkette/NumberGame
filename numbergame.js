var theNumber=document.querySelector('input[name=number]');
var response=document.querySelector('h1');
var button=document.querySelector('button');
var randomNum=Math.floor((Math.random() * 10) + 1);


function pickNumber(){

if(theNumber.value > randomNum) {
  response.textContent = "Too high";
} else if(theNumber.value < randomNum) {
   response.textContent = "Too low";
} else{
  response.textContent = "You Win!";
}
}

button.addEventListener('click', function(){
  pickNumber();
});
