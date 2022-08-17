// const tela = document.querySelector('#tela');
// const historicoCalculoAtual = document.querySelector('#historico-calculo-atual');

// const numeros = document.querySelectorAll('.numeros');
// const operacoes = document.querySelectorAll('.operacoes');
// const numerosPressionados = [];
// const numerosParaCalculo = [];

// var contadorDeIgualClicado = 0,
//   novoPrimeiroNumeroParaOperacao,
//   resultadoCalculo,
//   sinal, sinalUsuario;

// function habilitarCaracter (pontuacao) {
//   pontuacao.disabled = false;
//   pontuacao.enabled = true;

//   return pontuacao;
// }

// function desabilitarCaracter (pontuacao) {
//   pontuacao.disabled = true;
//   pontuacao.enabled = false;

//   return pontuacao;
// }

// function detectarNumeroParaCalculo (numero) {
//   numerosParaCalculo.push(formatadorNumero(numero));
// }

// (function preencherNumerosPressionados() {
//   numeros.forEach(numero => {
//     numero.addEventListener('click', () => {
//       if (numerosPressionados.length < 10) {
//         numerosPressionados.push(numero.textContent);
//         mostrarNumerosPressionados();
//       }
//     });
//   });
//   return numerosPressionados;
// })();

// // function keyPressed(evt){
// //   evt = evt || window.event;
// //   var key = evt.key;
// //   return key; 
// // };

// // document.onkeydown = function (evt) {
// //   let str = keyPressed(evt);
// //   if (str === 'Escape'){
// //     limpaC();
// //   }
// //   else if (str === 'Backspace') {
// //     BackSpace();
// //   }

// //   let numerosParaEventosDoTeclado = [
// //     '0','1','2','3','4','5','6','7','8','9',
// //   ];

// //   for (let i = 0; i < numerosParaEventosDoTeclado.length; i++) {
// //     if (str === numerosParaEventosDoTeclado[i]) {
// //       numerosPressionados.push(str);
// //       mostrarNumerosPressionados();
// //     };
// //   };

// //   let float = ','

// //   if (str === '.') {
// //     str = float;
// //   }
// //   if (str === float && numerosPressionados.includes(',') === false && numerosPressionados.includes('0,') === false) {
// //     numerosPressionados.push(str);
// //     mostrarNumerosPressionados();
// //   }

// //   let operacoes = [
// //     '+','-','*','/','=','Enter',
// //   ];

// //   for (let i = 0; i < operacoes.length; i++) {
// //     if (str === operacoes[i]) {
// //       sinalUsuario = str;
// //       if (sinalUsuario === '*') {
// //         sinalUsuario = 'x';
// //       }
// //       if (sinalUsuario === 'Enter') {
// //         sinalUsuario = '=';
// //       }
// //       detectarOperacao(sinalUsuario);
// //     };
// //   }
// // };


// function mostrarNumerosPressionados() {
//   let zero = document.querySelector('#zero');
//   let virgula = document.querySelector('#virgula');

//   if (numerosPressionados.length > 0) {
//     habilitarCaracter(zero);
//   }
  
//   if (numerosPressionados.includes(',')) {
//     desabilitarCaracter(virgula);
//   }
  
//   if (numerosPressionados.length == 1 && numerosPressionados[0] === ',') {
//     numerosPressionados[0] = '0,';
//     tela.textContent = numerosPressionados[0];
//   } 
//   else if (numerosPressionados.length === 1 && numerosPressionados[0] !== ',') {
//     tela.textContent = tela.textContent.replace(tela.textContent, numerosPressionados[0]);
//   }
//   else {
//     tela.textContent += numerosPressionados[numerosPressionados.length - 1];
//   }

//   return tela.textContent;
// };

// function detectarOperacao(value) {

//   if (numerosPressionados.length !== 0) {
//     detectarNumeroParaCalculo(tela.textContent);
//   }

  
//   // if (numerosParaCalculo.length % 2 === 0 && contadorDeIgualClicado === 0) {
//   //   resultado(
//   //     numerosParaCalculo[numerosParaCalculo.length - 2], 
//   //     numerosParaCalculo[numerosParaCalculo.length - 1]
//   //   );
//   // }
  
//   numerosPressionados.length = 0;
//   switch (value) {
//     case '+':
//       sinal = '+';
//       break;

//     case '-':
//       sinal = '-';
//       break;

//     case 'x':
//       sinal = 'x';
//       break;

//     case '/':
//       sinal = '/';
//       break;

//     case '=':
//       botaoIgual();
//       break;

//     default:
//       break;
//   };
//   return sinal;
// };

// async function filtrarNumerosParaCalculo() {
//   let i = numerosParaCalculo.length - 1;

//   novoPrimeiroNumeroParaOperacao = numerosParaCalculo[i];

//   let filtragem = numerosParaCalculo.filter( numerosRestantes => {
//     return novoPrimeiroNumeroParaOperacao !== numerosRestantes;
//   });

//   numerosParaCalculo.length = 0;

//   filtragem.map( numerosFiltrados => {
//     return numerosParaCalculo.push(numerosFiltrados);
//   });

// }

// function loopingOperacao() {
//   filtrarNumerosParaCalculo();

//   let i = numerosParaCalculo.length - 1;

//   numerosParaCalculo[i - 1] = novoPrimeiroNumeroParaOperacao;
//   let segundoNumeroParaOperacao = numerosParaCalculo[i];

//   resultado(novoPrimeiroNumeroParaOperacao, segundoNumeroParaOperacao);
// }

// function botaoIgual() {
//   let i = numerosParaCalculo.length - 1;

//   if (numerosParaCalculo.length === 1) {
//     //ok
//     historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} = `;
//   }
//   else {
//     if (contadorDeIgualClicado === 0){
//       contadorDeIgualClicado++;
//       let primeiroNumeroParaOperacao = numerosParaCalculo[i - 1];
//       let segundoNumeroParaOperacao = numerosParaCalculo[i];
//       resultado(primeiroNumeroParaOperacao, segundoNumeroParaOperacao);
//       historicoCalculoAtual.textContent = `${primeiroNumeroParaOperacao} ${sinal} ${segundoNumeroParaOperacao} = `;
//     }
//     else if (contadorDeIgualClicado === 1) {
//       //verificar a logica para o looping ser ativado
//       loopingOperacao();
//       historicoCalculoAtual.textContent = `${numerosParaCalculo[i - 2]} ${sinal} ${numerosParaCalculo[i - 1]} = `;
//     }
//   }    
//   console.log(numerosParaCalculo);
// }

// function escreverHistoricoCalculoAtual () {
//   let i = numerosParaCalculo.length - 1;

//   if (sinal !== '=') {
//     historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} ${sinal} `;
//     contadorDeIgualClicado = 0;
//   }
  
//   return historicoCalculoAtual.textContent;
// }

// operacoes.forEach(operacao => {
//   operacao.addEventListener("click", ()=> {
//     detectarOperacao(operacao.textContent);
//     escreverHistoricoCalculoAtual();
//   });
// });


// function resultado(primeiroNumero, segundoNumero) {

//   if (sinal === '+') {
//     resultadoCalculo = primeiroNumero + segundoNumero;
//   }
//   else if (sinal === '-') {
//     resultadoCalculo = primeiroNumero - segundoNumero;
//   }
//   else if (sinal === 'x') {
//     resultadoCalculo = primeiroNumero * segundoNumero;
//   }
//   else if (sinal === '/') {
//     resultadoCalculo = primeiroNumero / segundoNumero;
//   }

//   tela.textContent = resultadoCalculo;
//   numerosParaCalculo.push(resultadoCalculo);
//   // return resultadoCalculo;
//   // numerosPressionados.length = 0;
// };

// (function porcentagem() {
//   let botaoPorcentagem = document.querySelector('#porcentagem');

//   botaoPorcentagem.addEventListener('click', ()=>{
//     let segundoNumero = tela.textContent;
//     numerosParaCalculo.push(formatadorNumero(segundoNumero));

//     let primeiroNumeroCalculoPorcentagem = numerosParaCalculo[numerosParaCalculo.length - 2];
//     let segundoNumeroCalculoPorcentagem = numerosParaCalculo[numerosParaCalculo.length - 1];

//     let resultadoPorcentagem = segundoNumeroCalculoPorcentagem / primeiroNumeroCalculoPorcentagem;
    
//     numerosParaCalculo.pop();
//     numerosParaCalculo.push(resultadoPorcentagem);

//     let resultadoPorcentagemEmString = resultadoPorcentagem.toString();
//     if (resultadoPorcentagemEmString.includes('.')) {
//       resultadoPorcentagemEmString = resultadoPorcentagemEmString.replace('.',',');
//     }

//     if (primeiroNumeroCalculoPorcentagem === undefined){
//       primeiroNumeroCalculoPorcentagem = 0;
//       numerosPressionados.length = 0;
//       tela.textContent = '0';
//       historicoCalculoAtual.textContent = primeiroNumeroCalculoPorcentagem;
//     }
//     else {
//       tela.textContent = resultadoPorcentagemEmString;
//       historicoCalculoAtual.textContent += resultadoPorcentagemEmString;
//     }
//   });
//   return tela.textContent;
// })();

// (function operacoesLimpadoras(){
//   let ce = document.querySelector('#limpa');

//   ce.addEventListener('click', ()=>{
//     limpaCE();
//   });

//   let c = document.querySelector('#limpa-tudo');

//   c.addEventListener('click', ()=>{
//     limpaC();
//   });

//   let backspace = document.querySelector('#backspace');

//   backspace.addEventListener('click', ()=>{
//     BackSpace();
//   });
// })();

// function limpaCE () {
//   tela.textContent = 0;
//   numerosPressionados.length = 0;
//   zero.disabled = true;
//   zero.enabled = false;
//   virgula.enabled = true;
//   virgula.disabled = false;
//   if (numerosPressionados.includes(',')) {
//     virgula.enabled = false;
//     virgula.disabled = true;
//   }
// };

// function limpaC () {
//   tela.textContent = 0;
//   historicoCalculoAtual.textContent = '';
//   numerosPressionados.length = 0;
//   numerosParaCalculo.length = 0;
//   zero.disabled = true;
//   zero.enabled = false;
//   virgula.enabled = true;
//   virgula.disabled = false;
//   if (numerosPressionados.includes(',')) {
//     virgula.enabled = false;
//     virgula.disabled = true;
//   }
// };

// function BackSpace () {
//   tela.textContent = '';
//   numerosPressionados.pop();
//   if (numerosPressionados.includes(',')) {
//     virgula.enabled = false;
//     virgula.disabled = true;
//   }
//   else {
//     virgula.enabled = true;
//     virgula.disabled = false;
//   }

//   for (let i = 0; i < numerosPressionados.length; i++) {
//     tela.textContent += numerosPressionados[i];
//   }
//   if (numerosPressionados.length == 0) {
//     tela.textContent = 0;
//     zero.disabled = true;
//     zero.enabled = false;
//   }
// };

const screen = document.querySelector("#screen");
const calcHistory = document.querySelector("#calc-history");

const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
let signal = "";

const actualScreen = [],
      numbersToCalc = [];

const disableChar = (char) => {
  char.disabled = true;
  char.enabled = false;

  return char;
};

const enableChar = (char) => {
  char.enabled = true;
  char.disabled = false;

  return char;
};

const formatTheNumber = (number) => {
  const includes = number.includes(",");
  if (!includes) {
    number = parseInt(number);
    return number;
  };

  number = number.replace(",", ".");
  number = parseFloat(number);
  
  return number;
};

const limpaCE = (zero, comma) => {
  screen.value = 0;
  actualScreen.length = 0;
  disableChar(zero);
  enableChar(comma);
};

const limpaC = (zero, comma) => {
  screen.value = 0;
  calcHistory.textContent = "";
  actualScreen.length = 0;
  numbersToCalc.length = 0;
  disableChar(zero);
  enableChar(comma);
};

const BackSpace = (zero, comma) => {
  screen.value = "";
  actualScreen.pop();

  if (!actualScreen.includes(',')) {
    enableChar(comma);
  }

  actualScreen.map((number) => {
    screen.value += number;
  });

  if (actualScreen.length == 0) {
    screen.value = 0;
    disableChar(zero);
  };
};

(function clearFunctions() {
  let zero = document.querySelector("#zero");
  let comma = document.querySelector("#comma");

  let ce = document.querySelector("#clear");
  ce.addEventListener("click", () => {
    limpaCE(zero, comma);
  });

  let c = document.querySelector("#clear-all");
  c.addEventListener("click", () => {
    limpaC(zero, comma);
  });

  let backspace = document.querySelector("#backspace");
  backspace.addEventListener("click", () => {
    BackSpace(zero, comma);
  });
})();

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (actualScreen.length === 10) return;
    actualScreen.push(number.textContent);
    console.log(actualScreen);
  });
});

const showNumbersPressed = () => {
  let zero = document.querySelector("#zero");
  let comma = document.querySelector("#comma");
  let reg = new RegExp("^[0-9]*$");

  actualScreen.includes("0") && actualScreen.length < 1 ? disableChar(zero) : enableChar(zero);
  actualScreen.includes(",") ? disableChar(comma) : enableChar(comma);

  if (actualScreen.length === 1 && reg.test(actualScreen[0])) {
    screen.value = actualScreen[0];
    return;
  }

  if (screen.value == 0 && actualScreen.length === 1) {
    actualScreen.unshift("0");
  }
  
  screen.value += actualScreen[actualScreen.length - 1];

  return screen.value;
};

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    showNumbersPressed();
  });
});

const storeTheNumber = (number) => {
  if (actualScreen.length === 0) {
    return;
  };

  actualScreen.length = 0;
  return numbersToCalc.push(formatTheNumber(number));
};

const writeCalcHistory = (signal, showResultHistory = false, showHistoryLength = false) => {
  if (showResultHistory) {
    let firstNumber = numbersToCalc[numbersToCalc.length - 3];
    let secondNumber = numbersToCalc[numbersToCalc.length - 2];
    calcHistory.textContent = `${firstNumber} ${signal} ${secondNumber} =`;
    numbersToCalc.length = 0;
    return;
  };

  let number = numbersToCalc[numbersToCalc.length - 1];
  calcHistory.textContent = `${number} ${signal}`;
  return calcHistory.textContent;
};

const resultCalc = (signal) => {
  let firstNumber = numbersToCalc[numbersToCalc.length - 2];
  let secondNumber = numbersToCalc[numbersToCalc.length - 1];
  let result;

  switch (signal) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  };

  numbersToCalc.push(result);
  return screen.value = result;
};

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    storeTheNumber(screen.value);
    if (numbersToCalc.length % 2 === 0) {
      resultCalc(signal);
    };
    signal = operation.textContent;
    writeCalcHistory(signal);
  });
});

