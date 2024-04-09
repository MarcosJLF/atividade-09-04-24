// 4 - Imprima a tabuada do 5.

let n = 10;
let r = 0;
let m = "\n";

for(let i = 1; i <= 10; i++){
    r = n * i
    m += n +"x" +i+ "="+r + "\n"
    console.log(` ${n} x ${i} = ${r} \n`)
}
alert(m)