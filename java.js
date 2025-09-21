// java.js

function adicionar(item) {
  let div = document.getElementById("carrinho");
  if (div.innerHTML.includes("Carrinho vazio")) {
    div.innerHTML = "";
  }
  div.innerHTML += item + "<br>";
}

function limparCarrinho() {
  document.getElementById("carrinho").innerHTML = "<p>Carrinho vazio</p>";
}

function suporte() {
  alert("Entre em contato pelo WhatsApp: (49) 99157-2408");
}

function modoEscuro() {
  document.body.classList.toggle("dark-mode");
}
