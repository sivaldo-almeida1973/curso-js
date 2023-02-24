//Objetos  em Js array tambem é um objeto
/*
let num = ['Lucas', 'jose']
console.log(num)
console.log(typeof(num))
*/

let amigo = { nome: 'jose' , sexo: 'M' ,peso: 85.0 ,endereco:'Rua brasila', engordar(p=0){
  console.log('engordou')
  this.peso += p


}}

console.log(amigo)
console.log(amigo.nome)
console.log(typeof(amigo))
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)