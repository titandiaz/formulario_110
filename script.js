const inputsP = document.querySelectorAll(".patrimonio-info-side-right li input")
const inputsI = document.querySelectorAll(".ingresos-info-side-right li input")
const inputsC = document.querySelectorAll(".cost-info-side-right li input")
const inputsR = document.querySelectorAll(".esal-info-side-right li input")

function calcPatrimonio() {
  var suma = 0;
  for (let i = 0; i < 8; i++) {
    suma += parseInt(inputsP[i].value)
    if (Number(suma)) {
      document.getElementById("totalPB").value = suma;
    }
  }
  const totalPB = document.getElementById("totalPB").value
  document.getElementById("totalPL").value = totalPB - document.getElementById("pasivos").value
}

function calcIngresos() {
  var sumaI = 0;
  for (let i = 0; i < 6; i++) {
    sumaI += parseInt(inputsI[i].value)
    if (Number(sumaI)) {
      document.getElementById("I50").value = sumaI;
    }
  }
  const I50 = document.getElementById("I50").value
  document.getElementById("I54").value = I50 - document.getElementById("I51").value - document.getElementById("I52").value - document.getElementById("I53").value
}

function calcCostos() {
  var sumaC = 0;
  for (let i = 0; i < 5; i++) {
    sumaC += parseInt(inputsC[i].value)
    if (Number(sumaC)) {
      document.getElementById("I60").value = sumaC;
    }
  }
}

function calcRenta() {
  const I53 = document.getElementById("I53").value
  const I54 = document.getElementById("I54").value
  const I62 = document.getElementById("I62").value
  const I63 = document.getElementById("I63").value
  const I47 = document.getElementById("I47").value
  const I48 = document.getElementById("I48").value
  const I60 = document.getElementById("I60").value
  const I61 = document.getElementById("I61").value

  const op = parseInt(I53)+parseInt(I54)+parseInt(I62)+parseInt(I63)-parseInt(I47)-parseInt(I48)-parseInt(I60)-parseInt(I61)
  document.getElementById("I64").value= op
  // console.log(op)
}

function perdidaLiquida() {
  const I60= document.getElementById("I60").value
  const I61 = document.getElementById("I61").value
  const I48 = document.getElementById("I48").value
  const I47 = document.getElementById("I47").value
  const I53 = document.getElementById("I53").value
  const I54 = document.getElementById("I54").value
  const I62 = document.getElementById("I62").value
  const I63 = document.getElementById("I63").value

  const op2 = parseInt(I60)+parseInt(I61)+parseInt(I48)+parseInt(I47)-parseInt(I53)-parseInt(I54)-parseInt(I62)-parseInt(I63)
  document.getElementById("I65").value= op2
  // console.log(op2)
}

function rentaLiquida() {
  const I64= document.getElementById("I64").value
  const I66 = document.getElementById("I66").value

  const op3 = parseInt(I64)-parseInt(I66)
  document.getElementById("I67").value= op3
  // console.log(op2)
}

function gananciasOcasionales() {
  const I75= document.getElementById("I75").value
  const I76 = document.getElementById("I76").value
  const I77 = document.getElementById("I77").value

  const op4 = parseInt(I75)-parseInt(I76)-parseInt(I77)
  if (Number(op4)) {
    document.getElementById("I78").value= op4
  }
}

function impuestoNetoRenta() {
  const I79= document.getElementById("I79").value
  const I80 = document.getElementById("I80").value

  const op5 = parseInt(I79)-parseInt(I80)
  if (Number(op5)) {
    document.getElementById("I81").value= op5
  }
}

function totalImpuesto() {
  const I81= document.getElementById("I81").value
  const I82 = document.getElementById("I82").value
  const I83 = document.getElementById("I83").value
  const I84 = document.getElementById("I84").value
  const I85 = document.getElementById("I85").value
  const I86 = document.getElementById("I86").value
  const I87 = document.getElementById("I87").value

  const op6 = parseInt(I81)+parseInt(I82)+parseInt(I83)+parseInt(I85)+parseInt(I86)+parseInt(I87)-parseInt(I84)
  if (Number(op6)) {
    document.getElementById("I88").value= op6
  }
}
