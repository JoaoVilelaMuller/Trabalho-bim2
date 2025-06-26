
document.addEventListener("DOMContentLoaded", () => { // espera o carregamento completo do index
  const saldo = { tokens: 120 }; // saldo inicial de tokens

  const valorSaldo = document.getElementById("valor-saldo"); // elemento que vai mostrar o saldo
  const formCompra = document.getElementById("form-compra"); // formulário onde o usuario adiciona tokens
  const qtdInput = document.getElementById("quantidade-compra"); // campo onde o usuário digita a quantidade

  function atualizarSaldo() {
    if (valorSaldo) {
      valorSaldo.innerHTML = `Tokens disponíveis: <strong>${saldo.tokens}</strong>`; // mostra o saldo na tela
    }
  }

  if (formCompra && qtdInput) {
    formCompra.addEventListener("submit", (event) => {
      event.preventDefault(); // evita o recarregamento da página
      const quantidade = parseInt(qtdInput.value); // pega o número digitado

      if (!isNaN(quantidade) && quantidade > 0) {
        saldo.tokens += quantidade; // adiciona os tokens ao saldo
        atualizarSaldo(); // atualiza a exibição na tela
        qtdInput.value = ""; // limpa o campo de entrada
      }
    });
  }

  atualizarSaldo(); // mostra o saldo assim que a página carrega
});