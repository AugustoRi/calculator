const tela = document.querySelector('#tela');
const historicoCalculoAtual = document.querySelector('#historico-calculo-atual');
const numeros = document.querySelectorAll('.numeros');
const operacoes = document.querySelectorAll('.operacoes');
const numerosPressionados = [];
const numerosParaCalculo = [];

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

(function mostrarNumerosPressionados() {
  numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{ 
      let zero = document.querySelector('#zero');
      if (numerosPressionados.length > 0) {
        zero.disabled = false;
        zero.enabled = true;
      }

      let virgula = document.querySelector('#virgula');
      if (tela.textContent.includes(',')) {
        virgula.enabled = false;
        virgula.disabled = true;
      }

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
    });
  }); 
  return tela.textContent;
})();

(function detectarOperacao() {
  operacoes.forEach(operacao => {
    operacao.addEventListener('click', ()=>{
      let primeiroNumeroSemFormatacao = tela.textContent;
      numerosParaCalculo.push(formatadorNumero(primeiroNumeroSemFormatacao));
      numerosPressionados.length = 0;
      switch (operacao.textContent) {
        case '+':
          historicoCalculoAtual.textContent = `${numerosParaCalculo[0]} +`;
          break;

        case '-':
          historicoCalculoAtual.textContent = `${numerosParaCalculo[0]} -`;
          break;

        case 'x':
          historicoCalculoAtual.textContent = `${numerosParaCalculo[0]} x`;
          break;

        case '/':
          historicoCalculoAtual.textContent = `${numerosParaCalculo[0]} ÷`;
          break;

        default:
          break;
      };
    });
  });
  return historicoCalculoAtual.textContent;
})();

(function porcentagem() {
  let botaoPorcentagem = document.querySelector('#porcentagem');

  botaoPorcentagem.addEventListener('click', ()=>{
    let segundoNumero = tela.textContent;
    numerosParaCalculo.push(formatadorNumero(segundoNumero));

    let resultadoPorcentagem = numerosParaCalculo[1] / numerosParaCalculo[0];
    
    let resultadoPorcentagemEmString = resultadoPorcentagem.toString();

    if (resultadoPorcentagemEmString.includes('.')) {
      resultadoPorcentagemEmString = resultadoPorcentagemEmString.replace('.',',');
      console.log(resultadoPorcentagemEmString);
    }

    tela.textContent = resultadoPorcentagemEmString;
  });
  return tela.textContent;
})();

(function operacoesLimpadoras(){
  let ce = document.querySelector('#limpa');

  ce.addEventListener('click', ()=>{
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
  });

  let c = document.querySelector('#limpa-tudo');

  c.addEventListener('click', ()=>{
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
  });

  let backspace = document.querySelector('#backspace');

  backspace.addEventListener('click', ()=>{
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
  });
})();