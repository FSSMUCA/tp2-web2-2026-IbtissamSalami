let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];

    let texte;

    if (v === "") {
        texte = "(chaine vide)";
    } else {
        texte = String(v);
    }

    if (v) {
        console.log(texte + " -> truthy");
    } else {
        console.log(texte + " -> falsy");
    }
}