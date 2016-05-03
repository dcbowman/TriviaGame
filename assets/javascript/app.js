//start game
$( document ).ready(function(results){
console.log("ready");
});


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
	 console.log(score);
	 }); //ends results function

//ends onload function







