const infoEnergia = document.getElementById('infoEnergia'); // pega o elemento onde as infos vão aparecer

let registros = [
  { data: '24/06', gerado: 12, consumido: 8 }, // primeiro registro com dados de energia
  { data: '23/06', gerado: 10, consumido: 9 }, // segundo registro
];

function renderizarRegistros() {
  infoEnergia.innerHTML = ''; // limpa o que já tiver na tela

  registros.forEach(reg => {
    const div = document.createElement('div'); // cria uma nova div pra cada registro
    div.textContent = `Data: ${reg.data} - Gerado: ${reg.gerado}kWh - Consumido: ${reg.consumido}kWh`; // monta o texto com os dados
    infoEnergia.appendChild(div); // coloca a div dentro do elemento principal
  });
}

function gerarNovoRegistro() {
  const novaData = new Date().toLocaleDateString(); // pega a data atual formatada
  const gerado = Math.floor(Math.random() * 10 + 5); // gera um número aleatório entre 5 e 14 pra energia gerada
  const consumido = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9 pra energia consumida
  registros.unshift({ data: novaData, gerado, consumido }); // adiciona o novo registro no começo da lista
  renderizarRegistros(); // atualiza a tela com os novos dados
}

renderizarRegistros(); // mostra os registros assim que o código carrega