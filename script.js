let labelDiaEHora = document.getElementById('horaAtual')
const data = new Date()
let horaTexto =   data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() ;
labelDiaEHora.innerText = "Horário: " + horaTexto;

let meusDados = []

function registrar(){ //chama a função no button
    let labelBatidaRegistrada = document.getElementById('batidaRegistrada')
    const data = new Date()
    let diaTexto =  data.getUTCDate() + "/" + (parseInt(data.getMonth()) + 1)+ "/" + data.getFullYear();
    let horaTexto =   data.getHours() + ":" + data.getMinutes() ;

    let batidaAtual = meusDados[meusDados.length-1]
    if(batidaAtual && !batidaAtual.saida){
      batidaAtual.saida = horaTexto;
      meusDados[meusDados.length-1] = batidaAtual;
      labelBatidaRegistrada.innerText = (`Batida de saída registrada às ${horaTexto}`)
    }else{
      batida = {cod: meusDados.length ,dia: diaTexto, entrada: horaTexto}
      meusDados.push(batida)
      labelBatidaRegistrada.innerText = (`Batida de entrada registrada às ${horaTexto}`)
    }
    listar()
  }

function listar(){
  var tabela = document.getElementById("tabelaBody")
  tabela.innerHTML = ""
  for(var i = 0; i < meusDados.length; i++){

    var minhaTagTr = document.createElement("tr")
    var campoCodigo = document.createElement("td")
    var campoDia = document.createElement("td")
    var campoHoraEntrada = document.createElement("td")
    var campoHoraSaida = document.createElement("td")
    var totalHoras = document.createElement("td")

    campoCodigo.innerText = meusDados[i].cod; //localiza o elemento.cod utilizando o i 
    
    campoDia.innerText = meusDados[i].dia; //localiza o elemento.dia utilizando o i 
  
    campoHoraEntrada.innerText = meusDados[i].entrada
    
    if(meusDados[i].saida){
      campoHoraSaida.innerText = meusDados[i].saida
      totalHoras.innerText = calculaDiferenca(meusDados[i].entrada, meusDados[i].saida)
    }
    
    minhaTagTr.appendChild(campoCodigo) // adiciona o tr dentro do td com appendchild
    minhaTagTr.appendChild(campoDia) // adiciona o tr dentro do td com appendchild
    minhaTagTr.appendChild(campoHoraEntrada)
    minhaTagTr.appendChild(campoHoraSaida)
    minhaTagTr.appendChild(totalHoras)
   
    tabela.appendChild(minhaTagTr)
  }
}

//https://pt.stackoverflow.com/questions/213301/diferen%C3%A7a-de-horas-entre-duas-datas-com-javascript

function calculaDiferenca(inicial, final){
  var splInicial = inicial.split(":"); 
  var splFinal = final.split(":"); 
  var inicialMin = (Number(splInicial[0] * 60)) + Number(splInicial[1]); 
  var finalMin = (Number(splFinal[0] * 60)) + Number(splFinal[1]); 
  var totalMin = Number(finalMin - inicialMin);
  return Math.trunc(totalMin / 60).toString() + ":" + (totalMin % 60).toString();
}