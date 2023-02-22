function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  //var hora = data.getHours()
  var hora = 19
  
  
  if (hora >= 0 && hora < 12){
//bom dia!
    img.src = 'imagens-250/manha450.png'
    document.body.style.background = '#d2bf76'
    msg.innerHTML = `Agora são ${hora} horas da manhã`
  }else if (hora >= 12 && hora <= 18){
  //boa tarde
  img.src = 'imagens-250/tarde450.png'
  document.body.style.background = '#ec9837'
  msg.innerHTML = `Agora são ${hora} horas da tarde`
  }else{
    //boa noite!
    img.src = 'imagens-250/noite450.png'
    document.body.style.background = '#233968'
    msg.innerHTML = `Agora são ${hora} horas da noite`
  }



}

