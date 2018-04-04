var reponse;

var stats = {
  1: 0,
  2: 0,
  3: 0
};

var nombreAleatoire = function() {
  var max = 3;
  var min = 1;
  var randomOutOf3 = Math.floor(Math.random() * (max - min + 1)) + min;
  stats[randomOutOf3]++;
  return randomOutOf3;
}

/*
var testRandomness = function(num) {
  for (var i = 0; i < num; i++) {
    nombreAleatoire()
  }
}

testRandomness(100000);
console.log('%cstats', 'color:#f90;', stats);
*/

var repondre = function() {
  var inputs = window.document.getElementsByName('reponse');
  for (var i = 0; inputs[i]; i++) {
    if (inputs[i].checked) {
      reponse = inputs[i].value;
    };
  }
  tour();
};


var resultat = function (txt) {
  // window.document.getElementById('resultat').textContent = txt;
  var monDiv = document.getElementById('resultat');
  monDiv.innerHTML = txt;
}
