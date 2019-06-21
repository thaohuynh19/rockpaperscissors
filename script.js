//to check if Rock Paper or Scissors is clicked
var rockClicked = false;
var paperClicked = false;
var scissorsClicked = false;

//images will appear when the computer chooses
var rockSelectImg = new Image();
rockSelectImg.src = "images/rockSelect.jpg";
var paperSelectImg = new Image();
paperSelectImg.src = "images/paperSelect.jpg";
var scissorsSelectImg = new Image();
scissorsSelectImg.src = "images/scissorsSelect.jpg";

//images will appear when the player chooses
var rockPickImg = new Image();
rockPickImg.src = "images/rockPick.jpg";
var paperPickImg = new Image();
paperPickImg.src = "images/paperPick.jpg";
var scissorsPickImg = new Image();
scissorsPickImg.src = "images/scissorsPick.jpg";

//images for when the PLayer rolls over the choices
var rockRollImg = new Image();
rockRollImg.src = "images/rockRollover.jpg";
var paperRollImg = new Image();
paperRollImg.src = "images/paperRollover.jpg";
var scissorsRollImg = new Image();
scissorsRollImg.src = "images/scissorsRollover.jpg";

//images for when the player rolls off the choices
var rockImg = new Image();
rockImg.src = "images/rock.jpg";
var paperImg = new Image();
paperImg.src = "images/paper.jpg";
var scissorsImg = new Image();
scissorsImg.src = "images/scissors.jpg";

//a reference to all the id that will be used
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var rock2 = document.querySelector("#rock2");
var paper2 = document.querySelector("#paper2");
var scissors2 = document.querySelector("#scissors2");
var count = document.querySelector("#count");
var userWins = document.querySelector("#userWins");
var computerWins = document.querySelector("#computerWins");
var totalTies = document.querySelector("#totalTies");
var playerChose = document.querySelector("#playerChose");
var cpuChose = document.querySelector("#cpuChose");
var output = document.querySelector("#output");
var result = document.querySelector("#result");
const btn=document.querySelector("#btn");
const startScreen=document.querySelector("#startScreen");
const playScreen=document.querySelector("#playScreen");
const endScreen=document.querySelector("#endScreen");

//this is the start screen 
function startGame(){
	startScreen.style.display="block";
	playScreen.style.display="none";
	endScreen.style.display="none";
	btn.value = "Play Game";
	btn.addEventListener("click", function(){playGame();}, false);
}

//this is the play screen
function playGame(){
	startScreen.style.display="none";
	playScreen.style.display="block";
	btn.value = "End Game";
}

//this is the end screen
function gameEnd(){
	startScreen.style.display="none";
	playScreen.style.display="none";
	endScreen.style.display="block";
	btn.value="Start Screen";
	btn.addEventListener("click", startGame, false);
}

//this button will lead to the play screen
btn.addEventListener("click", playGame, false);

//Adding an event listener for when the mouse rollover and changes the picture while conditonal is added as well
rock.addEventListener("mouseover", function(){if(rockClicked===false){rock.src = rockRollImg.src;} else{paper.src = paperImg.src;}}, false);
paper.addEventListener("mouseover", function(){if(paperClicked === false){paper.src = paperRollImg.src;}}, false);
scissors.addEventListener("mouseover", function(){if(scissorsClicked === false){scissors.src = scissorsRollImg.src;}}, false);

//adding an event listener for when the mouse rolls off it'll return to orginal picture 
rock.addEventListener("mouseout", function(){if(rockClicked===false){rock.src = rockImg.src};}, false);
paper.addEventListener("mouseout", function(){if(paperClicked === false){paper.src = paperImg.src};}, false);
scissors.addEventListener("mouseout", function(){if(scissorsClicked === false){scissors.src = scissorsImg.src};}, false);

//adding an event listener for when the player chooses, the computer will choose 
rock.addEventListener("click", clickRock, false);
paper.addEventListener("click", clickPaper, false);
scissors.addEventListener("click", clickScissors, false);

//making a space for the player's future choice
var userInput = "";

//count of the wins for both sides
var playerWins = 0;
var cpuWins = 0;
var ties = 0;
var counter = 0;

//resets images and words for computer
function reset(){
	cpuChose.innerHTML = "";
	rock2.src = rockImg.src;
	paper2.src = paperImg.src;
	scissors2.src = scissorsImg.src;
}

//resets/replaces images that have been clicked on to orginal images
function rockReset(){
	paper.src = paperImg.src;
	scissors.src = scissorsImg.src;
}
function paperReset(){
	rock.src = rockImg.src;
	scissors.src = scissorsImg.src;
}
function scissorsReset(){
	rock.src = rockImg.src;
	paper.src = paperImg.src;
}

//player's choice will trigger the computer's choice which will count the times played
//after that the images will be reset
function clickRock(){
	counter++;
	userInput = 1;
	playerChose.innerHTML = "You chose ROCK";
	rock.src = rockPickImg.src;
	reset();
	rockReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	rockClicked = true;
}
function clickPaper(){
	counter++;
	userInput = 2;
	playerChose.innerHTML = "You chose PAPER";
	paper.src = paperPickImg.src;
	reset();
	paperReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	paperClicked = true;
}
function clickScissors(){
	counter++;
	userInput = 3;
	playerChose.innerHTML = "You chose SCISSORS";
	scissors.src = scissorsPickImg.src;
	reset();
	scissorsReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	scissorsClicked = true;
}

//this functions is for the computer to choose between rock,paper and scissors when the player chooses
function computerChoice(){ //computer "chooses"
	var number = Math.floor(Math.random()*3)+1;
	console.log("The computer chose: " + number);

	if(number==1){
		rock2.src = rockSelectImg.src;
		cpuChose.innerHTML = "Computer chose ROCK";
	}
	else if(number==2){
		paper2.src = paperSelectImg.src;
		cpuChose.innerHTML = "Computer chose PAPER";
	}
	else if(number==3){
		scissors2.src = scissorsSelectImg.src;
		cpuChose.innerHTML = "Computer chose SCISSORS";
	}
	else{
		rock2.src = rockSelectImg.src;
		cpuChose.innerHTML = "Computer chose ROCK";
	}
	
	console.log("The player chose: " + userInput);

	//this will decide and count the wins for each user or ties
	if(userInput==1 && number==3){
		output.innerHTML = "You win this round";
		playerWins++;
	}
	else if(userInput==2 && number==1){
		output.innerHTML = "You win this round";
		playerWins++;
	}
	else if(userInput==3 && number==2){
		output.innerHTML = "You win this round";
		playerWins++;
	}
	else if(userInput==3 && number==1){
		output.innerHTML = "Computer won this round";
		cpuWins++;
	}
	else if(userInput==1 && number==2){
		output.innerHTML = "Computer won this round";
		cpuWins++;
	}
	else if(userInput==2 && number==3){
		output.innerHTML = "Computer won this round";
		cpuWins++;
	}
	else{
		output.innerHTML = "Tie";
		ties++;
	}
	
	//counter of wins for player
	switch(playerWins){
		default:
			userWins.innerHTML = "Times You've Won: " + playerWins;
		break;
	}
	
	//counter of wins for computer
	switch(cpuWins){
		default:
			computerWins.innerHTML = "Times Computer Won: " + cpuWins;
		break;
	}
	
	//counter for number of ties
	switch(ties){
		default:
			totalTies.innerHTML = "Times Tied: " + ties;
		break;
	}
	
	//counts how many plays are remaining
	if(counter==0){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==1){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==2){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==3){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==4){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==5){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==6){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==7){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==8){ 
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==9){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==10){ //this will disable event listener and reset the game
		count.innerHTML = "There are no plays remaining";
		rock.addEventListener("mouseover", function(){rock.src = rockImg.src; document.body.style.cursor = "default";}, false);
		paper.addEventListener("mouseover", function(){paper.src = paperImg.src; document.body.style.cursor = "default";}, false);
		scissors.addEventListener("mouseover", function(){scissors.src = scissorsImg.src; document.body.style.cursor = "default";}, false);
		
		rock.removeEventListener("click", clickRock, false);
		paper.removeEventListener("click", clickPaper, false);
		scissors.removeEventListener("click", clickScissors, false);
		
		//this will decide who will win the game, directing to the end page
		if(playerWins>cpuWins){
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "You won the game! Click the end game button!";
			result.innerHTML = "Congrats! You have won! " + playerWins + " to " + cpuWins + "!!!!!";
		}
		else if(playerWins<cpuWins){
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "The computer won! Click the end game button!";
			result.innerHTML = "Nice Try! Computer won " + cpuWins + " to " + playerWins;
		}
		else{
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "You tied! Click the end game button!";
			result.innerHTML = "Great Job! You and the computer tied!";
		}
	}
}