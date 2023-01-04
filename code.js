// Exercice 1 //

var a = 2;
var b = 3;
var tmp = a;

a = b;
b = tmp;

console.log(a);
console.log(b);







// Exercice 2 //

let Nom = "toto";
let Age= 30;
let Homme = true;

console.log(Nom);
console.log(Age);
console.log(Homme);







//Exercice 3 puissance //

var a=4;
// Les 2 étoiles servent à multiplier la base par lui même //
console.log(a ** 5);








//Exercie 3 Fonction //

//1 ere Méthode //

var a = 'On a ';
var b = 'réussi';

function addition(a, b) {
}
console.log(sum= a + b);

//2 eme Méthode //

function addition (a, b) {
    return a + b;
}
console.log(addition (79, 6)) ;







//Exercice 3 Fonction convertir un nombre de minutes en secondes //

function secondes(minutes) {
    return  minutes * 60;
  }
  
  console.log(secondes(10));








//Exercice 4 //
function increment(n) {
    return ++n;
  }
  console.log(increment(6));









  //Exercice 5//
  function getSurface(base, hauteur) {
    return base * hauteur /2
  }
  console.log(getSurface (8,2))










  // exercice 6//
  function rara(str) {
    return str.split("").reverse().join("");
  }

  console.log(rara("WayToLearnX"));
  console.log(rara("Hello"));

  function reverseString(str) {
   
    return str.split("").reverse().join(""); 

}

console.log(reverseString("hey"))









  //Exercice 7//
  function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  }
    console.log(getMax(5, 9, 1));
    console.log(getMax(2, 3, 10));

//AUTRE METHODE : Math.max //
 var a = (10, 30, 60)
function getMax(a) {
    return Math.max(a);
}
console.log(getMax(a));








 //Exercice 8//

    function getFirst(tab) {
        return tab[0];
        
      }
      console.log(getFirst([1, 2, 3]));
    console.log(gestFirst([50, 60, 70]));







    //exercice 9  Récuperer URL d'un fichier//
    console.log(document.URL);







    //exercice10//

    function resteDiv(a, b) {
        return a % b;
        
      }
    console.log(resteDiv(1, 3));
    console.log(resteDiv(2, 4));
    console.log(resteDiv(3, 3));







        //Exercice 11 //
        function check(a, b) {
            return a + b < 100;
          }
          console.log(check (100,20))




        

        function check (a,b) {
          if (a + b < 100) {
            return "true";
          } else {
            return "False";
          }
        }
        console.log(check(100,30));




        //Exercice 12//
        function heureSeconde(heure) {
            return heure * 3600;
          }
          console.log(heureSeconde(1));
          console.log(heureSeconde(5));





          
          // Exercice 13 //
          function check(a){
            return a <= 0;
          }
          console.log(check(1));
          console.log(check(-1));
          console.log(check(0));





        //Exercice 14 //
        function check(a,b) {
            return a === b;
          }
          console.log(check(3,6));
          console.log(check(1,'1'));
          console.log(check(1,1));
        



          //Exercice 15 //
          function isDivisible(n) {
            return n % 5 === 0;
          }
          console.log(isDivisible(5));
          console.log(isDivisible(10));
          console.log(isDivisible(6));





        //Exercice 16//
        function hmTos(heure, minute) {
            return (heure*3600) + (minute*60);
          }
        console.log(hmTos(1, 10));
        console.log(hmTos(0, 59));
        console.log(hmTos(0, 0));







        //Exercice 17 //
        // 
        function reverseTab(tab) {
          var tab = ['pomme', 'poire', 'pêche'];
        //     // j'initialise un tableau vide
            let res = [];
        //     // j'initialise une boucle for
        //     // Au départ l'index vaut la longueur du tableau
        //     // tant que l'index est supérieur à -1 je continue
        //     // j'enlève 1 à l'index à la fin des instructions
            for (let i = tab.length -1; i > -1; i--) {
              // j'ajoute au tableau vide la valeur du tableau qui a pour index i
              res.push(tab[i]);
            }
            
            return res;
          }
        console.log(reverseTab([1, 2, 3]));
        console.log(reverseTab([1, 1, 2, 2, 3]));


var array = ['fr','ko', 'lol'];

function rev(array) {
  var revArr = [];
  const length = array.length;
  for (i=0;i <= length - 1;i++) {
    revArr[i] = array.pop(); 
  }
  return revArr;
}
console.log(rev(array));

//Exercice pour tirer dans un ordre décroissant //


tab = [3,1,2,5,11,9,8];
const sortDesc = (a, b) => b - a;
tab.sort(sortDesc);
console.log(tab);


function sortDesc(a,b) {
  return b - a;
}



        // //exercice 18 //
        function getLastElem(tab) {
            return tab[tab.length - 1]
          }
          console.log(getLastElem([1, 2, 3, 4]));
          console.log(getLastElem(["Alex", "Bob", "Emily"]));








          //exercice 19 //
          function checkEq(a, b) {
            return a === b;
        }
        console.log(checkEq(5, 5));
        console.log(checkEq(5, 0));
        console.log(checkEq(5, false));
        console.log(checkEq(5, "5"));




        //exercice 20//

        function isEmpty(a) {
            return a === "";
        }
        console.log(isEmpty(" "));
        console.log(isEmpty ("WayToLearnX"));
        console.log(isEmpty("1"));
        console.log(isEmpty(""));
