//condição Multipla(situações pontuais)
var agora = new Date()
var diasem = agora.getDay()

//diasem = 8
/*
0=domingo
1=segunda

*/
console.log(diasem)

switch(diasem){
  case 0:
    console.log('Domingo')
    break
    case 1:
      console.log('segunda')
    break
    case 2:
      console.log('Terça')
    break
    case 3:
      console.log('Quarta')
    break
    case 4:
      console.log('Quinta')
    break
    case 5:
      console.log('Sexta')
    break      
    case 6:
      console.log('Sabado')
      default:
        console.log('[ERRO!]dia invalido')
    break
}