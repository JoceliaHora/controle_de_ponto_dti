let labelDiaEHora = document.getElementById('horaAtual')
const data = new Date()
let horaTexto =   data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() ;
labelDiaEHora.innerText = "Horário: " + horaTexto;

function registrar(){ //chama a função no button
    let labelBatidaRegistrada = document.getElementById('batidaRegistrada')
    const data = new Date()
    let horaTexto =   data.getHours() + ":" + data.getMinutes() ;
    labelBatidaRegistrada.innerText = (`Batida registrada com sucesso às ${horaTexto}`)
    // aqui vai ficar a chamada de função que vai salvar a batida
  }

let meusDados = [
    {
      'dia': '1/2/2022',
      'entrada': '08:20',
      'saida':   '16:10' ,
    },
    {
      'dia': '2/2/2022',
      'entrada': '08:40',
      'saida':   '15:00' ,
    },
    {
      'dia': '3/2/2022',
      'entrada': '07:00',
      'saida':   '16:14' ,
    }
  ]

  for(var i = 0; i < meusDados.length; i++){

    var tabela = document.getElementById("tabelaBody")

    var minhaTagTr = document.createElement("tr")

    var campoDia = document.createElement("td")
    campoDia.innerText = meusDados[i].dia; //localiza o elemento utilizando o i 
    minhaTagTr.appendChild(campoDia) // adiciona o tr dentro do td com appendchild

    var campoHoraEntrada = document.createElement("td")
    campoHoraEntrada.innerText = meusDados[i].entrada
    minhaTagTr.appendChild(campoHoraEntrada)

    var campoHoraSaida = document.createElement("td")
    campoHoraSaida.innerText = meusDados[i].saida
    minhaTagTr.appendChild(campoHoraSaida)

    var campoHoraSaida = document.createElement("td")
    campoHoraSaida.innerText = meusDados[i].saida
    minhaTagTr.appendChild(campoHoraSaida)

    tabela.appendChild(minhaTagTr)
  }

