//start game
$( document ).ready(function(countDown){ //starts the timer fuction
//function countDown(sec,elem){
	var count = 10;
	var counter = setInterval(timer, 1000);
	//$("status").html("Time left"+ "+sec" +"seconds");
 function timer(){
 	count--;
	if(count < 1){
		clearInterval(counter);
		//$("status").html = "<h2>Time's up </h>";
		//$("status").html = '<a href="score.html">"Check your score!"</a>';
	alert("Oop. Time, she's up.");
	}
	//sec--;
	//var timer = setTimeout(countDown('+sec+', '+elem+', 1000));

//countDown(120, "status");

document.getElementById("status").innerHTML = count;
};




//clicking the result key will check for the correct answers
$("results").click(function(results){
var score = 0;
var incorrect = 0;

var correctAnswer1 = document.getElementById("q1d")
	 if (correctAnswer1.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }

var correctAnswer2 = document.getElementById("q2a")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }

var correctAnswer3 = document.getElementById("q3a")
	 if (correctAnswer3.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }

var correctAnswer4 = document.getElementById("q4c")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
var correctAnswer5 = document.getElementById("q5b")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }

var correctAnswer6 = document.getElementById("q6a")
	 if (correctAnswer6.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
var correctAnswer7 = document.getElementById("q7b")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
	
var correctAnswer8 = document.getElementById("q8c")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
	 var correctAnswer9 = document.getElementById("q9a")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
var correctAnswer0 = document.getElementById("q10d")
	 if (correctAnswer.checked === true){
	 	score++;
	 }
	 else
	 {
	 	incorrect++;
	 }
	

	 }); //ends results function
});
//ends onload function







