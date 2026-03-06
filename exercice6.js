let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let defaut = "valeur par défaut";

console.log("PARTIE A : utilisation de ??");

console.log("nom ?? valeur par défaut -> " + (nom ?? defaut));
console.log("age ?? valeur par défaut -> " + (age ?? defaut));
console.log("ville ?? valeur par défaut -> " + (ville ?? defaut));
console.log("score ?? valeur par défaut -> " + (score ?? defaut));
console.log("actif ?? valeur par défaut -> " + (actif ?? defaut));

console.log("\nPARTIE B : utilisation de ||");

console.log("nom || valeur par défaut -> " + (nom || defaut));
console.log("age || valeur par défaut -> " + (age || defaut));
console.log("ville || valeur par défaut -> " + (ville || defaut));
console.log("score || valeur par défaut -> " + (score || defaut));
console.log("actif || valeur par défaut -> " + (actif || defaut));

console.log("\nPARTIE C : comparaison");

function comparer(nomVariable, valeur) {

    let resultat1 = valeur ?? defaut;
    let resultat2 = valeur || defaut;

    if (resultat1 === resultat2) {
        console.log(nomVariable + " : ?? et || -> même résultat");
    } else {
        console.log(nomVariable + " : ?? et || -> résultat différent");
    }
}

comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);