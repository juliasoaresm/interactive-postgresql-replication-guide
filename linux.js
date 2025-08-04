window.onload = function () {
    const nome = localStorage.getItem("usuarioReplicacao") || "[usuário]";
    const senha = localStorage.getItem("senhaReplicacao") || "[senha]";
    const senhaSUDO = localStorage.getItem("SenhaSuperUsuario") || "[senha Super Usuario]";
    const Versao = localStorage.getItem("Versao") || "[Versão]";
    const ipPrimario = localStorage.getItem("ipPrimario") || "[ipPrimario]";
    const ipReplica = localStorage.getItem("ipReplica") || "[ipReplica]";
    document.querySelectorAll(".nomeUsuario").forEach(el => el.textContent = nome);
    document.querySelectorAll(".SenhaReplicacao").forEach(el => el.textContent = senha);
    document.querySelectorAll(".ipPrimario").forEach(el => el.textContent = ipPrimario);
    document.querySelectorAll(".ipReplica").forEach(el => el.textContent = ipReplica);
    document.querySelectorAll(".senhaSUDO").forEach(el => el.textContent = senhaSUDO);
    document.querySelectorAll(".Versao").forEach(el => el.textContent = Versao);
  };

  function copiarComando(indice) {
  const comandos = document.querySelectorAll(".comando");
  const botoes = document.querySelectorAll(".copiar");
  const comando = comandos[indice];
  const botao = botoes[indice];
  const texto = comando.innerText || comando.textContent;
  navigator.clipboard.writeText(texto);
  const icone = botao.querySelector("i");
  if (icone) {
    icone.classList.remove("fa-copy");
    icone.classList.add("fa-check");

    setTimeout(() => {
      icone.classList.remove("fa-check");
      icone.classList.add("fa-copy");
    }, 500);
  }
}
