$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : "Let's start with something easy. What is Bulma's last name?",
	possibleAnswers : ['A. Trunks',
				 'B. Shorts',
				 'C. Briefs',
				 'D. Bloomers'],
	flags : [false, false, true, false],
	answer : 'C. Briefs'
};

var q2 = {
	question: 'What kind of beans does Corrin grown?',
	possibleAnswers: ['A. Chi Beans',
				 'B. Senzu Beans',
				 'C. Ki Beans',
				 'D. Sentsu Beans'],
	flags : [false, true, false, false],
	answer : 'B. Senzu Beans'
};

var q3 = {
	question : 'Where is the Capsule Corporation headquarters located?',
	possibleAnswers : ['A. West Town',
				 'B. West City',
				 'C. East City',
				 'D. East Town'],
	flags : [false, true, false, false],
	answer : 'B. West City'
};

var q4 = {
	question : 'What is the name of the elite Frieza Force that attempts to stop everyone on planet Namek?',
	possibleAnswers : ['A. The Ginyu Force.',
				 'B. The Galactic Group.',
				 'C. The Frieza Team.',
				 'D. The Jinyuu Team.'],
	flags : [true, false, false, false],
	answer : 'A. The Ginyu Force'
};

var q5 = {
	question : "Let's talk about the Hyperbolic Time Chamber. If one minute has passed in the real world outside of the chamber, how much time has passed inside the chamber?",
	possibleAnswers : ['A. One year, one day, and one minute.',
				 'B. Six hours and five minutes.',
				 'C. Six minutes.',
				 'D. One Year.'],
	flags : [false, true, false, false],
	answer : 'B. Six hours and five minutes'
};

var q6 = {
	question : 'Who was not a challenger at the Cell Games?',
	possibleAnswers : ['A. Android 18',
				 'B. Android 16',
				 'C. Caroni',
				 'D. Pirozhki'],
	flags : [true, false, false, false],
	answer : 'A. Android 18'
};

var q7 = {
	question : 'How does Piccolo kill the last Saibamen?',
	possibleAnswers : ['A. Punching it through the stomach.',
				 'B. Special Beam Cannon.',
				 'C. Energy attack released from his mouth.',
				 'D. Throwing it up in the air, flying above it, and hitting it back into the ground.'],
	flags : [false, false, true, false],
	answer : 'C. Energy attack released from his mouth.'
};

var q8 = {
	question : 'Who, on orders from King Yemma, led Vegeta back to Earth to fight Super Buu?',
	possibleAnswers : ['A. Yajirobe',
				 'B. Baba',
				 'C. Kami',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Baba'
};

var q9 = {
	question : "Just after Cell's defeat, up at the lookout, what is the final wish Krillin makes with the Dragon Balls?",
	possibleAnswers : ["A. Bringing all of Cell's victims back to life.",
				 'B. Transporting Goku to the lookout from the battlefield.',
				 'C. A full head of hair.',
				 'D. Removing the bombs from inside the Androids.'],
	flags : [false, false, false, true],
	answer : 'D. The Gallopin\' Gaucho'
};

var q10 = {
	question : 'What allows Android 19 to overwelm Goku in battle?',
	possibleAnswers : ['A. Due to a blocked ki, Goku cannot make the transformation from Super Saiyan to Super Saiyan 2.',
				  'B. Goku is weakened by a heart virus.',
				  "C. Android 19 has absorbed Vegeta and Gohan's strengths from previous battles.",
				  'D. Android 19 is joined in battle by Androids 18 and 16.'],
	flags : [false, true, false, false],
	answer : 'B. Goku is weakened by a heart virus.'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Time to go Super Saiyan!</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});