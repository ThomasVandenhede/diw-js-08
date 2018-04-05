var game = (function() {
  var _score = 0;
  var _computerScore = 0;
  var _turn = 0;
  var _stats = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  var nombreAleatoire = function(min, max) {
    var randomOutOf3 = Math.floor(Math.random() * (max - min + 1)) + min;
    _stats[randomOutOf3]++;
    return randomOutOf3;
  }

  var selectWinnerForThisTurn = function(userChoice, computerChoice) {
    let text = '';
    
    if (userChoice.name === computerChoice.name) {
      text = 'Draw';
    } else {
      const defeats = computerChoice.defeats.map((item, index) => {
        return item.name;
      });
      
      if (defeats.includes(userChoice.name)) {
        text = computerChoice.defeats.find((item) => {
          return (item.name === userChoice.name);
        }).message;
        _computerScore = _computerScore + 1;
      } else {
        text = choices[userChoice.name].defeats.find((item) => {
          return (item.name === computerChoice.name);
        }).message;
        _score = _score + 1;
      }
    }
    return text;
  };

  var resultat = function (txt) {
    var monDiv = document.getElementById('resultat');
    monDiv.innerHTML = txt;
  };

  var tour = function(reponse) {
    var randomNumber = nombreAleatoire(0, Object.keys(choices).length - 1);
    var computerChoice = choices[Object.keys(choices)[randomNumber]];
    var userChoice = choices[reponse.toLowerCase()];
  
    text = selectWinnerForThisTurn(userChoice, computerChoice);
    text = text + '<br />' + 'Vous ' + _score + ' - ' + _computerScore + ' Ordinateur';
    
    resultat(text);
  };

  return {
    restart: function() {
      state = {
        score: 0,
        computerScore: 0,
        turn: 0,
      }
      resultat('');
    },
    repondre: function() {
      var inputs = window.document.getElementsByName('reponse');
      for (var i = 0; inputs[i]; i++) {
        if (inputs[i].checked) {
          reponse = inputs[i].value;
        };
      }
      tour(reponse);
    }
  }
})();

const choices = {
  rock: {
    name: 'rock',
    defeats: [
      {
        name: 'lizard',
        message: 'rock crushes lizard',
      },
      {
        name: 'scissors',
        message: 'rock breaks scissors',
      },
    ],
  },
  paper: {
    name: 'paper',
    defeats: [
      {
        name: 'rock',
        message: 'paper covers rock',
      },
      {
        name: 'spock',
        message: 'paper disproves spock',
      },
    ],
  },
  scissors: {
    name: 'scissors',
    defeats: [
      {
        name: 'paper',
        message: 'scissors cut paper',
      },
      {
        name: 'lizard',
        message: 'scissors decapitate lizard',
      },
    ],
  },
  lizard: {
    name: 'lizard',
    defeats: [
      {
        name: 'paper',
        message: 'lizard eats paper',
      },
      {
        name: 'spock',
        message: 'lizard poisons spock',
      },
    ],
  },
  spock: {
    name: 'spock',
    defeats: [
      {
        name: 'scissors',
        message: 'spock smashes scissors',
      },
      {
        name: 'rock',
        message: 'spock vaporizes rock',
      },
    ],
  },
};