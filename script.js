// Acolhimento do Portal de Escuta
function enviarDesabafo(event) {
  event.preventDefault();
  const mensagem = document.getElementById("mensagemAcolhimento");
  mensagem.style.display = "block";
  mensagem.innerHTML = "Obrigado por compartilhar o que sente. Lembre-se: você não está sozinho! Procure a coordenação, um professor de confiança ou ligue para o Disque 100 para buscar apoio.";
  document.getElementById("formEscuta").reset();
}

// Lógica do Quiz
const respostasCertas = ["sim", "nao", "sim", "nao", "sim"];

function calcularResultado() {
  let acertos = 0;
  for (let i = 0; i < 5; i++) {
    const selecionado = document.querySelector(`input[name="p${i}"]:checked`);
    if (selecionado && selecionado.value === respostasCertas[i]) {
      acertos++;
    }
  }
  const resultado = document.getElementById("resultadoQuiz");
  resultado.style.display = "block";
  resultado.innerText = `Você acertou ${acertos} de 5 perguntas. ${acertos >= 4 ? 'Excelente consciência sobre o tema!' : 'Continue estudando sobre o combate ao bullying!'}`;
}

// Acessibilidade: Modo Escuro
function alternarTema() {
  document.body.classList.toggle("dark-mode");
}

// Acessibilidade: Ajuste de Fonte
let tamanhoFonte = 100;
function alterarFonte(delta) {
  tamanhoFonte += delta * 10;
  if (tamanhoFonte >= 80 && tamanhoFonte <= 140) {
    document.body.style.fontSize = tamanhoFonte + "%";
  }
}

// Botão Voltar ao Topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}