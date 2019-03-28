const fruits = ['pomme', 'BAnane', 'rAisin', 'mangue'];
//const requete = ['an']

function filtreTexte(arr) {
   return arr.filter(function (el) {
      return el.toLowerCase().indexOf(('ai').toLowerCase().indexOf('ue')) < 0;
   })
}

console.log(filtreTexte(fruits)); // ['banane', 'mangue'];