document.getElementById('btnTrocar').addEventListener('click', () => { // quando o botão for clicado
  const qtd = Number(document.getElementById('qtd').value); // pega o valor digitado e transforma em numero
  const resultado = document.getElementById('resultado'); // seleciona onde mostrar o resultado

  if (qtd > 0) {
    resultado.textContent = `Você trocou ${qtd} tokens por ${qtd / 5} kWh.`; // calcula a energia equivalente e mostra
  } else {
    resultado.textContent = 'Quantidade inválida!'; // mostra erro se o valor for 0 ou negativo
  }
});