//5-Altere o programa anterior para fornecer a tabuada do número que o usuário pedir.


let n = +prompt()
let r = 0;
let m = "\n";

for(let i = 1; i <= 10; i++){
    r = n * i
    m += n +"x" +i+ "="+r + "\n"
    console.log(` ${n} x ${i} = ${r} \n`)
}
console.log(m)