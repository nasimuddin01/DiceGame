//this is the calculatioon random number one
var number1=Math.random();
number1=Math.round(number1*6);

//this is the calculatioon of random number two
var number2=Math.random();
number2=Math.round(number2*6);

//conditional logic section for player1
if(number1==1){
  document.querySelector(".player1").setAttribute("src","/one.png");
}
else if (number1==2) {
  document.querySelector(".player1").setAttribute("src","/two.png");
}
else if(number1==3){
  document.querySelector(".player1").setAttribute("src","/three.png");
}
else if (number1==4) {
  document.querySelector(".player1").setAttribute("src","/four.png");
}
else if(number1==5){
  document.querySelector(".player1").setAttribute("src","/five.png");
}
else {
 document.querySelector(".player1").setAttribute("src","/six.png");
}

//conditional logic for player 2
if(number2==1){
  document.querySelector(".player2").setAttribute("src","/one.png");
}
else if (number2==2) {
  document.querySelector(".player2").setAttribute("src","/two.png");
}
else if(number2==3){
  document.querySelector(".player2").setAttribute("src","/three.png");
}
else if (number2==4) {
  document.querySelector(".player2").setAttribute("src","/four.png");
}
else if(number2==5){
  document.querySelector(".player2").setAttribute("src","/five.png");
}
else {
 document.querySelector(".player2").setAttribute("src","/six.png");
}


//Game Result section
if(number1===number2){
  document.querySelector("h1").innerHTML="Ohh! 🤼 Match Draw";
}
else if(number1>number2){
  document.querySelector("h1").innerHTML="🚩 Player One has Win this match";
}
else{
  document.querySelector("h1").innerHTML="Player Two has Win this match 🚩";
}
