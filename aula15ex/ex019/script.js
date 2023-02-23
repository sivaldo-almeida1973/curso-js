// (let )tem a mesma função de (var)
// podemos usar com window ou sem ele tanto faz.
function contar(){
  let ini = window.document.getElementById('txt1')//tem que converter
  let fim = window.document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  let res = window.document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'impossivel contar!'
    window.alert('[ERRO!] faltam dados!')
   
  }else{
    res.innerHTML = 'contando.. <br>'//br quebra de linha
    
    let i = Number(ini.value)//cnversão txt1  para numeros
    let f = Number(fim.value)//cnversão txtf  para numeros
    let p = Number(passo.value)//cnversão txtp  para numeros
    
    if (p <= 0){
      window.alert('Passo Invalido! Considerando Passo 1')
      p = 1
    }
    //cont inicio /enquanto contador for menor ou igual ao fim/contador vai receber ele mesmo mais o passo (for(let c = i; c <= f ; c += p)
    
    if (i < f){
      //contagem crescente
        for(let c = i; c <= f ; c += p){
        res.innerHTML += ` ${c} \u{1f6B4}`//colocar emoj( \u{1f911)

    }
    
  }else{
    //contagem regressiva
      for(let c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1f6B4}`
      }
  }
  res.innerHTML += `\u{1F38C}`
}
}