// Simulação de Sistema Bancário
function simularCompra() {
  const saldoInicial = parseFloat(document.getElementById("saldo").value);
  const valorCompra = parseFloat(document.getElementById("compra").value);

  if (valorCompra <= saldoInicial) {
      const novoSaldo = saldoInicial - valorCompra;
      document.getElementById("resultadoSistemaBancario").textContent = `Compra realizada com sucesso! Novo saldo: R$${novoSaldo.toFixed(2)}`;
  } else {
      document.getElementById("resultadoSistemaBancario").textContent = "Saldo insuficiente!";
  }
}

// Calculadora
function calcularOperacao() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value;

  let resultado;

  switch (operacao) {
      case '+':
          resultado = num1 + num2;
          break;
      case '-':
          resultado = num1 - num2;
          break;
      case '*':
          resultado = num1 * num2;
          break;
      case '/':
          resultado = num1 / num2;
          break;
      default:
          resultado = "Operação inválida";
  }

  document.getElementById("resultadoCalculadora").textContent = `Resultado da operação: ${resultado}`;

}


function calcularReajuste() {
  const salarioAtual = parseFloat(document.getElementById("salario").value);

  let percentualAumento;
  let novoSalario;

  if (salarioAtual <= 280) {
      percentualAumento = 20;
  } else if (salarioAtual <= 700) {
      percentualAumento = 15;
  } else if (salarioAtual <= 1500) {
      percentualAumento = 10;
  } else {
      percentualAumento = 5;
  }

  const aumento = (salarioAtual * percentualAumento) / 100;
  novoSalario = salarioAtual + aumento;

  const resultadoElement = document.getElementById("resultadoReajusteSalarial");
  resultadoElement.textContent = `
      Salário antes do reajuste: R$${salarioAtual.toFixed(2)}
      Percentual de aumento aplicado: ${percentualAumento}%
      Valor do aumento: R$${aumento.toFixed(2)}
      Novo salário após o aumento: R$${novoSalario.toFixed(2)}
  `;
}

function verificarTriangulo() {
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);

  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      if (lado1 === lado2 && lado1 === lado3) {
          document.getElementById("resultadoTriangulo").textContent = "É um triângulo equilátero.";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
          document.getElementById("resultadoTriangulo").textContent = "É um triângulo isósceles.";
      } else {
          document.getElementById("resultadoTriangulo").textContent = "É um triângulo escaleno.";
      }
  } else {
      document.getElementById("resultadoTriangulo").textContent = "Não é possível formar um triângulo com esses lados.";
  }
}