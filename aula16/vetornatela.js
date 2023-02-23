/*
let valores = [1,2,3,4,5,6,7]
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for (let pos = 0; pos < valores.length; pos++  ){
  console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}

*/  //o codigo de cima é igual a esse de baixo
/*
let num = [5,8,2,9,3]
for(let pos in num)
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
*/
let num = [3,6,8,5,1,4,2]
console.log(num.push(9))
console.log(num.sort())
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é  ${num[0]} `)
let pos = num.indexOf(1)
if (pos == -1){
  console.log('o valor não foi encontrado')
}else{
  console.log(`o valo 1 esta na posição ${pos}`)
}
