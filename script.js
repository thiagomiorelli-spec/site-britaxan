//Botão orçamento
const numero = "5549999190087";
const mensagem = encodeURIComponent("Olá, gostaria de solicitar um orçamento!");

function abrirWhats(e) {
  e.preventDefault();
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

document.getElementById("btn-orcamento").addEventListener("click", abrirWhats);
document.getElementById("btn-orçamento").addEventListener("click", abrirWhats);
