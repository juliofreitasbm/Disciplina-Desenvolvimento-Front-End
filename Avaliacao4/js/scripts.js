function calcular() {
  let num1 = parseFloat(document.getElementById('number1').value);
  let num2 = parseFloat(document.getElementById('number2').value);
  let operador = document.getElementById('operador').value;
  let resultado;

  if (isNaN(num1) || num1 === "") {
    alert("Por favor, insira o primeiro número válido.");
    return;
  } else if (isNaN(num2) || num2 === "") {
    alert("Por favor, insira o segundo número válido.");
    return;
  }

  switch (operador) {
    case '1':
      resultado = num1 + num2;
      break;
    case '2':
      resultado = num1 - num2;
      break;
    case '3':
      resultado = num1 * num2;
      break;
    case '4':
      if (num2 === 0) {
        alert("Divisão por zero não é permitida.");
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Por favor, selecione um operador válido.");
      return;
  }

  document.getElementById("resultado").innerText = `${resultado}`;
}

function  calcularIMC() {
  let peso = parseFloat(document.getElementById('peso').value);
  let altura = parseFloat(document.getElementById('altura').value);
  let resultadoIMC;

  if (isNaN(peso) || peso === "") {
    alert("Por favor, insira um peso válido.");
    return;
  } else if (isNaN(altura) || altura === "") {
    alert("Por favor, insira uma altura válida.");
    return;
  }
  alturaMetros = altura / 100; 
  resultadoIMC = peso / (alturaMetros * alturaMetros);
  document.getElementById("resultadoIMC").innerText = `${resultadoIMC.toFixed(2)}`;
  
  let classificacao = "";
  if (resultadoIMC < 16) {
    classificacao = "Magreza grave";
  } else if (resultadoIMC >= 16 && resultadoIMC <= 16.9) {
    classificacao = "Magreza moderada";
  } else if (resultadoIMC >= 17 && resultadoIMC <= 18.5) {
    classificacao = "Magreza leve";
  } else if (resultadoIMC >= 18.6 && resultadoIMC <= 24.9) {
    classificacao = "Peso ideal";
  } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
    classificacao = "Sobrepeso";
  } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
    classificacao = "Obesidade grau I";
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  document.getElementById("classificacao").innerText = classificacao;

  // Monta a tabela de referência
  const tabela = `
    <table border="1" cellpadding="8" cellspacing="0" style="margin-top:10px; border-collapse: collapse; width:100%;">
      <thead style="background:#f0f0f0;">
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>&lt; 16</td><td>Magreza grave</td></tr>
        <tr><td>16 – 16.9</td><td>Magreza moderada</td></tr>
        <tr><td>17 – 18.5</td><td>Magreza leve</td></tr>
        <tr><td>18.6 – 24.9</td><td>Peso ideal</td></tr>
        <tr><td>25 – 29.9</td><td>Sobrepeso</td></tr>
        <tr><td>30 – 34.9</td><td>Obesidade grau I</td></tr>
        <tr><td>35 – 39.9</td><td>Obesidade grau II</td></tr>
        <tr><td>&ge; 40</td><td>Obesidade grau III</td></tr>
      </tbody>
    </table>
  `;

  // Insere a tabela na página
  document.getElementById("tabelaIMC").innerHTML = tabela;
}
