const tela = document.querySelector('#tela');
const historicoCalculoAtual = document.querySelector('#historico-calculo-atual');
const numeros = document.querySelectorAll('.numeros');
const operacoes = document.querySelectorAll('.operacoes');
const numerosPressionados = [];
const numerosParaCalculo = [];
var resultadoCalculo = 0;
var sinal = '';
var sinalUsuario = '';

function formatadorNumero (numero) {
  if (numero.includes(',')) {
    numero = numero.replace(',', '.');
    numero = parseFloat(numero);
  }
  else {
    numero = parseInt(numero);
  }
  return numero;
}; 

(function preencherNumerosPressionados() {
  numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{
      numerosPressionados.push(numero.textContent);
    });
  });
  return numerosPressionados;
})();

function keyPressed(evt){
  evt = evt || window.event;
  var key = evt.key;
  return key; 
};

document.onkeydown = function (evt) {
  let str = keyPressed(evt);
  if (str === 'Escape'){
    limpaC();
  }
  else if (str === 'Backspace') {
    BackSpace();
  }

  let numerosParaEventosDoTeclado = [
    '0','1','2','3','4','5','6','7','8','9',
  ];

  for (let i = 0; i < numerosParaEventosDoTeclado.length; i++) {
    if (str === numerosParaEventosDoTeclado[i]) {
      numerosPressionados.push(str);
      mostrarNumerosPressionados();
    };
  };

  let float = ','

  if (str === '.') {
    str = float;
  }
  if (str === float && numerosPressionados.includes(',') === false && numerosPressionados.includes('0,') === false) {
    numerosPressionados.push(str);
    mostrarNumerosPressionados();
  }

  let operacoes = [
    '+','-','*','/','=','Enter',
  ];

  for (let i = 0; i < operacoes.length; i++) {
    if (str === operacoes[i]) {
      sinalUsuario = str;
      if (sinalUsuario === '*') {
        sinalUsuario = 'x';
      }
      if (sinalUsuario === 'Enter') {
        sinalUsuario = '=';
      }
      detectarOperacao(sinalUsuario);
    };
  }
};

function mostrarNumerosPressionados() {
  if (numerosPressionados.length == 1 && numerosPressionados[0] === ',') {
    numerosPressionados[0] = '0,';
    tela.textContent = numerosPressionados[0];
  } 
  else if (numerosPressionados.length === 1 && numerosPressionados[0] !== ',') {
    tela.textContent = tela.textContent.replace(tela.textContent, numerosPressionados[0]);
  }
  else {
    tela.textContent += numerosPressionados[numerosPressionados.length - 1];
  }
  let zero = document.querySelector('#zero');
  if (numerosPressionados.length > 0) {
    zero.disabled = false;
    zero.enabled = true;
  }

  let virgula = document.querySelector('#virgula');
  if (numerosPressionados.includes(',')) {
    console.log('possue');
    virgula.enabled = false;
    virgula.disabled = true;
  }
  return tela.textContent;
};

numeros.forEach(numero => {
  numero.addEventListener('click', ()=>{ 
    mostrarNumerosPressionados();
  });
}); 

function detectarOperacao(value) {
  if (numerosPressionados.length !== 0) {
    let primeiroNumeroSemFormatacao = tela.textContent;
    numerosParaCalculo.push(formatadorNumero(primeiroNumeroSemFormatacao));
  }
  if (numerosParaCalculo.length % 2 === 0) {
    resultado();
  }
  let primeiroNumero = numerosParaCalculo[numerosParaCalculo.length - 3];
  let segundoNumero = numerosParaCalculo[numerosParaCalculo.length - 2];

  numerosPressionados.length = 0;
  let i = numerosParaCalculo.length - 1;
  switch (value) {
    case '+':
      sinal = '+';
      historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} ${sinal} `;
      break;

    case '-':
      sinal = '-';
      historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} ${sinal} `;
      break;

    case 'x':
      sinal = 'x';
      historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} ${sinal} `;
      break;

    case '/':
      sinal = '/';
      historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} ${sinal} `;
      break;

    case '=':
      if (numerosParaCalculo.length <= 1) {
        historicoCalculoAtual.textContent = `${numerosParaCalculo[i]} = `;
      }
      else if ((numerosParaCalculo.length - 1) % 2 === 0) {
        historicoCalculoAtual.textContent = `${primeiroNumero} ${sinal} ${segundoNumero} = `;
      }
      break;

    default:
      break;
  };
  return historicoCalculoAtual.textContent;
};

operacoes.forEach(operacao => {
  operacao.addEventListener('click', ()=>{
    detectarOperacao(operacao.textContent);
  });
});

function resultado() {
  let primeiroNumero = numerosParaCalculo[numerosParaCalculo.length - 2];
  let segundoNumero = numerosParaCalculo[numerosParaCalculo.length - 1];

  if (sinal === '+') {
    resultadoCalculo = primeiroNumero + segundoNumero;
  }
  else if (sinal === '-') {
    resultadoCalculo = primeiroNumero - segundoNumero;
  }
  else if (sinal === 'x') {
    resultadoCalculo = primeiroNumero * segundoNumero;
  }
  else if (sinal === '/') {
    resultadoCalculo = primeiroNumero / segundoNumero;
  }

  tela.textContent = resultadoCalculo;
  numerosParaCalculo.push(resultadoCalculo);
};

(function porcentagem() {
  let botaoPorcentagem = document.querySelector('#porcentagem');

  botaoPorcentagem.addEventListener('click', ()=>{
    let segundoNumero = tela.textContent;
    numerosParaCalculo.push(formatadorNumero(segundoNumero));

    let primeiroNumeroCalculoPorcentagem = numerosParaCalculo[numerosParaCalculo.length - 2];
    let segundoNumeroCalculoPorcentagem = numerosParaCalculo[numerosParaCalculo.length - 1];

    let resultadoPorcentagem = segundoNumeroCalculoPorcentagem / primeiroNumeroCalculoPorcentagem;
    
    numerosParaCalculo.pop();
    numerosParaCalculo.push(resultadoPorcentagem);

    let resultadoPorcentagemEmString = resultadoPorcentagem.toString();
    if (resultadoPorcentagemEmString.includes('.')) {
      resultadoPorcentagemEmString = resultadoPorcentagemEmString.replace('.',',');
    }

    if (primeiroNumeroCalculoPorcentagem === undefined){
      primeiroNumeroCalculoPorcentagem = 0;
      numerosPressionados.length = 0;
      tela.textContent = '0';
      historicoCalculoAtual.textContent = primeiroNumeroCalculoPorcentagem;
    }
    else {
      tela.textContent = resultadoPorcentagemEmString;
      historicoCalculoAtual.textContent += resultadoPorcentagemEmString;
    }
  });
  return tela.textContent;
})();

(function operacoesLimpadoras(){
  let ce = document.querySelector('#limpa');

  ce.addEventListener('click', ()=>{
    limpaCE();
  });

  let c = document.querySelector('#limpa-tudo');

  c.addEventListener('click', ()=>{
    limpaC();
  });

  let backspace = document.querySelector('#backspace');

  backspace.addEventListener('click', ()=>{
    BackSpace();
  });
})();

function limpaCE () {
  tela.textContent = 0;
  numerosPressionados.length = 0;
  zero.disabled = true;
  zero.enabled = false;
  virgula.enabled = true;
  virgula.disabled = false;
  if (numerosPressionados.includes(',')) {
    virgula.enabled = false;
    virgula.disabled = true;
  }
};

function limpaC () {
  tela.textContent = 0;
  historicoCalculoAtual.textContent = '';
  numerosPressionados.length = 0;
  numerosParaCalculo.length = 0;
  zero.disabled = true;
  zero.enabled = false;
  virgula.enabled = true;
  virgula.disabled = false;
  if (numerosPressionados.includes(',')) {
    virgula.enabled = false;
    virgula.disabled = true;
  }
};

function BackSpace () {
  tela.textContent = '';
  numerosPressionados.pop();
  if (numerosPressionados.includes(',')) {
    virgula.enabled = false;
    virgula.disabled = true;
  }
  else {
    virgula.enabled = true;
    virgula.disabled = false;
  }

  for (let i = 0; i < numerosPressionados.length; i++) {
    tela.textContent += numerosPressionados[i];
  }
  if (numerosPressionados.length == 0) {
    tela.textContent = 0;
    zero.disabled = true;
    zero.enabled = false;
  }
};