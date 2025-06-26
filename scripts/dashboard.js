const infoEnergia = document.getElementById('infoEnergia');

let registros = [
  { data: '24/06', gerado: 12, consumido: 8 },
  { data: '23/06', gerado: 10, consumido: 9 },
];

function renderizarRegistros() {
  infoEnergia.innerHTML = '';

  registros.forEach((reg, index) => {
    const div = document.createElement('div');
    div.textContent = `Data: ${reg.data} - Gerado: ${reg.gerado}kWh - Consumido: ${reg.consumido}kWh `;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.onclick = () => {
      registros.splice(index, 1); // remove o registro pelo índice
      renderizarRegistros(); // atualiza a tela
    };

    div.appendChild(btnExcluir); // adiciona o botão à div do registro
    infoEnergia.appendChild(div);
  });
}

function gerarNovoRegistro() {
  const novaData = new Date().toLocaleDateString();
  const gerado = Math.floor(Math.random() * 10 + 5);
  const consumido = Math.floor(Math.random() * 10);
  registros.unshift({ data: novaData, gerado, consumido });
  renderizarRegistros();
}

renderizarRegistros();