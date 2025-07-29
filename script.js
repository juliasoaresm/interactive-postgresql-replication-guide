function copiarComando() {
  // Encontra o botão que foi clicado
  const botao = event.currentTarget;

  // Encontra o elemento pai mais próximo com o id comando-container
  const container = botao.closest('#comando-container');

  // Dentro desse container, pega o parágrafo com a classe 'comando' ou 'comandoG'
  const comando = container.querySelector('.comando, .comandoG');

  // Cria um elemento de área de transferência temporário
  const tempInput = document.createElement('textarea');
  tempInput.value = comando.innerText;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Feedback visual (opcional)
  botao.innerHTML = '<i class="fa-solid fa-check"></i>';
  setTimeout(() => {
    botao.innerHTML = '<i class="fa-solid fa-copy"></i>';
  }, 600);
}
document.getElementById('submit').addEventListener('click', function () {
    // Coleta os dados dos campos
    const dados = {
      ipPrimario: document.getElementById('ipPrimario').value,
      ipReplica: document.getElementById('ipReplica').value,
      usuarioReplicacao: document.getElementById('usuarioReplicacao').value,
      senhaReplicacao: document.getElementById('senhaReplicacao').value,
      SenhaSuperUsuario: document.getElementById('SenhaSuperUsuario').value
    };

    // Atualiza os textos que possuem os placeholders
    Object.keys(dados).forEach(key => {
      document.querySelectorAll(`[data-placeholder="${key}"]`).forEach(span => {
        span.textContent = dados[key] || span.dataset.placeholder;
      });
    });
  });