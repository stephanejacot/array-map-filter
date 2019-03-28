/* Array.prototype.map - Exercice 1

Ecrire une fonction getStringsLength qui reçoit comme un argument un tableau de chaînes.
En utilisant map, cette fonction doit renvoyer un tableau avec,
pour chaque chaîne CHAINE de longueur N en entrée, la chaîne "CHAINE contains N characters"
en sortie.

Exemple d'entrée:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]
En sortie: [
  'Chicken contains 7 characters',
  'Bacon contains 5 characters',
  'Tofu contains 4 characters',
  'Mayonnaise contains 10 characters'
  function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
] */

function getStringsLength (stringArray) {
  const stringArray2 = stringArray.map(function (string) {
    return string + ' contains ' + string.length + ' characters'
  })
  return stringArray2
}
console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']))

// Si besoin, tu peux toujours visualiser le résultat avec console.log,
// mais alors, il faut alors lancer l'exercice avec node map/ex1

// Ne pas modifier l'export
module.exports = getStringsLength
