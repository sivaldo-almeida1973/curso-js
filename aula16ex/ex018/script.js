//criar os controles basicos
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []   //criar um vetor para analizar dados

//criar funçao adicionar

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
      return true
    }else{
      return false
    }
}
function inlista(n, l){
  if (l.indexOf(Number(n)) != -1) {
    return true

  }else{
    return false
  }
}
function adicionar(){
    if(isnumero(num.value) && !inlista(num.value ,valores)){
      valores.push(Number(num.value)) //adicionar elemmento no vetor
      let item = document.createElement('option')//cria um varial item
      item.text = `Valor ${num.value} adicionado `
      lista.appendChild(item)
      res.innerHTML = '' //limpar resultado
    }else{
      window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''//função para limpar conteudo
    num.focus() //função para limpar conteudo
}
function finalizar(){  //ligar ao botao fializar em html
  if (valores.length == 0){  //total de num cadastrados
    window.alert('Adicione valres antes de finalizar!')
  }else{
    let tot = valores.length  // variavel
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores ){
         soma += valores[pos]
         if (valores [pos] > maior)
             maior = valores[pos]
          if (valores[pos] < menor)
             menor = valores[pos]
}
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrados!</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior} .</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
    res.innerHTML += `<p> somando todos os valores temos ${soma}. </p>`
    res.innerHTML += `<p> A media dos valores digitados é  ${media}. </p>`
  }

}