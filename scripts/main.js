const titulo = document.querySelector("h1"); // pega o título principal da página
titulo.style.color = "#FFA500"; // muda a cor do título pra laranja

const navUl = document.querySelector("nav ul"); // seleciona a lista do menu de navegação
const novoItem = document.createElement("li"); // cria um novo item de lista
const novoLink = document.createElement("a"); // cria um novo link
novoLink.href = "pages/saldo.html"; // define o destino do link
novoLink.textContent = "Saldo"; // define o texto que vai aparecer no link
novoItem.appendChild(novoLink); // coloca o link dentro do item
navUl.appendChild(novoItem); // adiciona o novo item na lista do menu

const sol = document.getElementById("sol"); // seleciona a imagem do sol
sol.addEventListener("mouseover", () => {
  sol.style.transform = "scale(1.1)"; // aumenta um pouco o tamanho quando passa o mouse
});
sol.addEventListener("mouseout", () => {
  sol.style.transform = "scale(1)"; // volta ao tamanho normal quando tira o mouse
});

const textoCaixa2 = document.createElement("p"); // cria um parágrafo novo
textoCaixa2.textContent = "Utilizamos blockchain para registrar e valorizar a energia excedente, criando um ecossistema sustentável e transparente."; // define o texto explicativo

caixa2.appendChild(tituloCaixa2); // coloca o título na caixa
caixa2.appendChild(textoCaixa2); // coloca o parágrafo na caixa

const paragrafos = document.querySelectorAll("p"); // pega todos os parágrafos da página
const ultimoParagrafo = paragrafos[paragrafos.length - 1]; // seleciona o último parágrafo
ultimoParagrafo.style.marginTop = "2rem"; // adiciona um espaçamento em cima
ultimoParagrafo.style.lineHeight = "1.6"; // aumenta o espaçamento entre as linhas pra melhor leitura