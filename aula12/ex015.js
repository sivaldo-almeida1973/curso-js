var agora = new Date() //pegar hora atual
var hora = agora.getHours() //hotra atual
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
  console.log('Bom dia!!')
}else if ( hora <= 18){
  console.log('Boa tarde')
}else {
  console.log('Boa noite')
}