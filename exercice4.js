let paires = [ [0, ""],[0, "0"],[0, false],["", false],[null, undefined],[null, false],[NaN, NaN],[1, "1"],["\t\n ", 0]];

let compt = 0;
let N =  paires.length;
for (let i = 0; i < N; i++) 
{

  let a = paires[i][0];
  let b = paires[i][1];

  let doubleEgale = (a == b);
  let tripleEgale = (a === b);

  console.log(`${String(a)}  == ${String(b)}  -> ${doubleEgale} | ${String(a)} === ${String(b)} -> ${tripleEgale}`);

  if (doubleEgale === true && tripleEgale === false) {
    compt++;
  }

}

console.log("-----------------------------------------------------");
console.log(`${compt} paire(s) où == et === donnent des résultats différents`);