function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano ){
    window.alert('[ERRO!]Verifique os dados e tente novamente!')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    var genero = ''
    var img = document.createElement('img')//colocar imagem 
    img.setAttribute('id','foto') //colocar imagem com JS

    if (fsex[0].checked){
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'img/criançaM.png')
      }else if (idade >= 10 && idade < 21){
        //Jovem
        img.setAttribute('src', 'img/astronauta.png')
      }else if( idade < 50){
        //adulto
        img.setAttribute('src', 'img/adultoM.png')
      }else {
        //idoso
        img.setAttribute('src', 'img/lua.png')
      }
    }else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'img/criançaF.png')
      }else if (idade >= 10 && idade < 21){
        //Jovem
        img.setAttribute('src', 'img/adolf.png')
      }else if( idade < 50){
        //adulto
        img.setAttribute('src', 'img/adultoF.png')
      }else {
        //idoso
        img.setAttribute('src', 'img/idosaF.png')
      }
      
    }
    res.style.textAlign = 'center' //alinha o texto no centro
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

  }
}