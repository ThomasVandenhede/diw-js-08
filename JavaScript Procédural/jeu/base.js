const MAX_NUMBER_OF_TURNS = 10;

var reponse;
var score = 0;
var computerScore = 0;
var turn = 0;

const choices = {
  rock: {
    name: 'rock',
    defeats: [
      'paper',
      'lizard',
    ],
  },
  paper: {
    name: 'paper',
    defeats: [
      'rock',
      'spock',
    ],
  },
  scissors: {
    name: 'scissors',
    defeats: [
      'paper',
      'lizard',
    ],
  },
  lizard: {
    name: 'lizard',
    defeats: [
      'paper',
      'spock',
    ],
  },
  spock: {
    name: 'spock',
    defeats: [
      'scissors',
      'rock',
    ],
  },
};

var stats = {
  1: 0,
  2: 0,
  3: 0
};  

var nombreAleatoire = function(min, max) {
  var randomOutOf3 = Math.floor(Math.random() * (max - min + 1)) + min;
  stats[randomOutOf3]++;
  return randomOutOf3;
}

var repondre = function() {
  var inputs = window.document.getElementsByName('reponse');
  for (var i = 0; inputs[i]; i++) {
    if (inputs[i].checked) {
      reponse = inputs[i].value;
    };
  }
  tour(reponse);
};


var resultat = function (txt) {
  // window.document.getElementById('resultat').textContent = txt;
  var monDiv = document.getElementById('resultat');
  monDiv.innerHTML = txt;
}

var selectWinnerForThisTurn = function(userChoice, computerChoice) {
  var text = '', textDefeat, textVictory, textDraw;
  textDefeat = 'Vous perdez !';
  textVictory = 'Vous gagnez !';
  textDraw = "Égalité ! L'ordinateur a choisi comme vous";

  if (userChoice.name === computerChoice.name) {
    text = textDraw;
  } else {
    if (computerChoice.defeats.includes(userChoice.name)) {
      text = textDefeat;
      computerScore = computerScore + 1;
    } else {
      text = textVictory;
      score = score + 1;
    }
  }
  return text;
}

var tour = function(reponse) {
  var randomNumber = nombreAleatoire(0, Object.keys(choices).length - 1);
  var computerChoice = choices[Object.keys(choices)[randomNumber]];
  var userChoice = choices[reponse.toLowerCase()];

  console.log('user choice', userChoice);
  console.log('computer choice', computerChoice);
  var text = "L'ordinateur a choisi... " + computerChoice.name + " !<br />";

  text = text + selectWinnerForThisTurn(userChoice, computerChoice);
  
  text = text + "<br />" + "Vous " + score + " - " +  computerScore + " Ordinateur";
  resultat(text);
}