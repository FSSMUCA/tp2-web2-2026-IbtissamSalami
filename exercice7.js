let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
let reduction = 0;

if ((codePromo ?? null) !== null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100;
}

let total = sousTotal - reduction;
let statut = "";

if (soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}

let nouveauSolde = soldeCompte;

if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
}

console.log("===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");