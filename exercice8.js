let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()

if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}

console.log('nom : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageNombre = parseInt(age)

if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    console.log("age : valeur invalide")
} else {
    console.log("age : " + ageNombre + " (valide)")
}

let positionArrobase = email.indexOf("@")
let positionPoint = email.indexOf(".", positionArrobase)

if (positionArrobase !== -1 && positionPoint !== -1) {
    console.log('email : "' + email + '" (valide)')
} else {
    console.log('email : "' + email + '" (invalide : pas de point après @)')
}


let scoreNombre = parseInt(scoreJeu)

if (Number.isNaN(scoreNombre)) {
    scoreNombre = 0
}

console.log('scoreJeu : ' + scoreNombre + ' (extrait depuis "' + scoreJeu + '")')

let adminBool

if (estAdmin === "true") {
    adminBool = true
} else if (estAdmin === "false") {
    adminBool = false
}

console.log('estAdmin : ' + adminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)')

let connexion = derniereConnexion ?? "Jamais connecté"

console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)')

let nbConnexions = Number(nombreConnexions)

if (nbConnexions === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log("nombreConnexions : " + nbConnexions)
}

console.log("================================")