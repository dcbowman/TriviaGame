//start game
$("index.html").ready(function(){ 
alert("It's time for some Rom Com trivia! Click OK to play! You have 2 minutes");


//starts the timer fuction

	var count = 120;
	var counter = setInterval(timer, 1000);
	
	
 function timer(){
 	count--;
	if(count < 1){
		clearInterval(counter);
		
	alert("Oop. Time, she's up.");

	window.location.replace("score.html");
}
//$("score.html").ready(function(results){

	
//document.getElementById("status").innerHTML = count;

//};


//clicking the result key will check for the correct answers

var score = 0;
var incorrect = 0;

function results(){

var correctAnswer1 = document.getElementById("q1d")
	 if (correctAnswer1.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }

var correctAnswer2 = document.getElementById("q2a")
	 if (correctAnswer2.checked === true){
	 	score++;
	 	$("#correct").html(score);

	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }

var correctAnswer3 = document.getElementById("q3a")
	 if (correctAnswer3.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }

var correctAnswer4 = document.getElementById("q4c")
	 if (correctAnswer.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }
var correctAnswer5 = document.getElementById("q5b")
	 if (correctAnswer5.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }

var correctAnswer6 = document.getElementById("q6a")
	 if (correctAnswer6.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }
var correctAnswer7 = document.getElementById("q7b")
	 if (correctAnswer7.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 	$("#incorrect").html(incorrect);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }
	
var correctAnswer8 = document.getElementById("q8c")
	 if (correctAnswer.checked8 === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }
	 var correctAnswer9 = document.getElementById("q9a")
	 if (correctAnswer9.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 	$("#incorrect").html(incorrect);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }
var correctAnswer0 = document.getElementById("q10d")
	 if (correctAnswer0.checked === true){
	 	score++;
	 	$("#correct").html(score);
	 }
	 else
	 {
	 	incorrect++;
	 	$("#incorrect").html(incorrect);
	 }

	

	}; //ends results function
document.getElementById("status").innerHTML = count;
document.getElementById("correct").innerHTML = score;
document.getElementById("incorrect").innerHTML = incorrect;
};

});
//ends onload function







