let userWorld = prompt("Inserisci una parola");
let worldLength = userWorld.length;
console.log(userWorld);

function palindroma(parola) {
    let palindromaWorld = "";
for (let i = parola.length -1; i >= 0; i--) {
     palindromaWorld += parola[i];
    }
    console.log(palindromaWorld);
    return palindromaWorld
}

console.log(palindroma(userWorld));