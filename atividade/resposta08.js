// Calcule o fatorial de um número dado.
let n = +prompt()
let r = 1;

for(let i = 1; i <= n; i++){
    r *= i;
}
console.log(r)