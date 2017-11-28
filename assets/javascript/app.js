$("#start").on("click", function(){
	$("#start").remove();
	game.loadQuestion();
})

$(document).on("click", ".answer-button", function(e){
	game.clicked(e);
})

var questions = [{
	question: "question 1",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 2",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 3",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 4",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 5",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 6",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 7",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}, {
	question: "question 8",
	answers: ["option 1", "option 2", "option 3", "option 4"],
	correctAnswer: "correct answer here",
	image:"assets/images/img.gif"
}];

var game = {
	questions:questions,
	currentQuestion:0,
	counter:30,
	correct:0,
	incorrect:0,
	unanswered:0,
	countdown: function(){
		$("#counter").html(game.counter);
		if(game.counter<=0){
			console.log("Time Up");
			game.timeUp();
		}
	},
	loadQuestion: function(){
		timer = setInterval(game.countdown, 1000);
		$("subWrapper").html("<h2>" + question[game.currentQuestion].question + "</h2>");
		for(var i=0; i<questions[game.currentQuestion].answers.length; i++){
			$('#subWrapper').append('<button class="answer-button" id="button- '+ i +'" data-name="' + questions[game.currentQuestion].answers[i] +'">'+questions[game.currentQuestion].answers[i]+'</button>');
		}
	},
	nextQuestion: function(){
		game.counter = 30;
		$("#counter").html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},
	timeUp: function(){
		clearInterval(timer);
		game.unanswered++;
		$("subWrapper").html("<h2>Out of Time</h2>");
		$("subWrapper").append("<h3>The Correct Answer Was; " +questions[game.currentQuestion].correctAnswer+"</h3>");
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else{
			setTimeout(game.nextQuestion, 3000);
		}
	},
	results: function(){
		clearInterval(timer);
		$("subWrapper").html("all done");
		$("subWrapper").append("Correct: " +game.correct);
		$("subWrapper").append("incorrect: " +game.incorrect);
		$("subWrapper").append("unanswered: " +game.unanswered);
	},
	clicked: function(){
		clearInterval(timer);
		if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
			game.answeredCorrectly();
		} else{
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function(){
		console.log("Correct");
		clearInterval(timer);
		game.correct++;
		$("#subWrapper").html("<h2>you got it right</h2>");
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else{
			setTimeout(game.nextQuestion, 3000);
		}
	},
	answeredIncorrectly: function(){
		console.log("wrong");
		clearInterval(timer);
		game.correct++;
		$("#subWrapper").html("<h2>you got it wrong</h2>");
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else{
			setTimeout(game.nextQuestion, 3000);
	},
	reset: function(){

	}
}