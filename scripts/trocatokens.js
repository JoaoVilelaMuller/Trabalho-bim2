document.getElementById('btnTrocar').addEventListener('click', () => {
  const qtd = Number(document.getElementById('qtd').value);
  const resultado = document.getElementById('resultado');

  if (qtd > 0) {
    resultado.textContent = `Você trocou ${qtd}tokens por ${qtd/5} kWh.`;
  } else {
    resultado.textContent = 'Quantidade inválida!';
  }
});