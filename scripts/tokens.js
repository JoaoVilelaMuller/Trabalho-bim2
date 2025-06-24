const saldo = document.getElementById('saldo');
const historico = document.getElementById('historicoTransacoes');

let tokens = 150;
let transacoes = [
  { motivo: "Venda de energia", valor: 50 },
  { motivo: "Doação para projeto social", valor: -30 },
  { motivo: "Compra de energia", valor: -20 },
];

function atualizarCarteira() {
  saldo.textContent = `Saldo: ${tokens} TOK`;
  historico.innerHTML = '';
  transacoes.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.motivo} — ${t.valor > 0 ? '+' : ''}${t.valor} TOK`;
    historico.appendChild(li);
  });
}

atualizarCarteira();