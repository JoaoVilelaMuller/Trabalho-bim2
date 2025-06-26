document.getElementById('btnTrocar').addEventListener('click', () => { // quando o botao for clicado
  const qtd = Number(document.getElementById('qtd').value); // pega a quantidade digitada e transforma em numero
  const resultado = document.getElementById('resultado'); // seleciona onde vai mostrar o resultado

  if (qtd > 0) {
    resultado.textContent = `Você trocou ${qtd}kWh por ${qtd * 5} tokens.`; // calcula e mostra os tokens recebidos
  } else {
    resultado.textContent = 'Quantidade inválida!'; // mensagem de erro se o valor for 0 ou menor
  }
});