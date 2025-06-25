
const titulo = document.querySelector("h1");
titulo.style.color = "#FFA500";


const navUl = document.querySelector("nav ul");
const novoItem = document.createElement("li");
const novoLink = document.createElement("a");
novoLink.href = "pages/saldo.html";
novoLink.textContent = "Saldo";
novoItem.appendChild(novoLink);
navUl.appendChild(novoItem);


const sol = document.getElementById("sol");
sol.addEventListener("mouseover", () => {
  sol.style.transform = "scale(1.1)";
});
sol.addEventListener("mouseout", () => {
  sol.style.transform = "scale(1)";
});

const caixa2 = document.getElementById("caixa2");
const tituloCaixa2 = document.createElement("h2");
tituloCaixa2.textContent = "Como Funciona a SolarChain";
const textoCaixa2 = document.createElement("p");
textoCaixa2.textContent = "Utilizamos blockchain para registrar e valorizar a energia excedente, criando um ecossistema sustentável e transparente.";

caixa2.appendChild(tituloCaixa2);
caixa2.appendChild(textoCaixa2);


const paragrafos = document.querySelectorAll("p");
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
ultimoParagrafo.style.marginTop = "2rem";
ultimoParagrafo.style.lineHeight = "1.6";