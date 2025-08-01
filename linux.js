window.onload = function () {
    const nome = localStorage.getItem("usuarioReplicacao") || "[usuário]";
    const senha = localStorage.getItem("senhaReplicacao") || "[senha]";
    document.getElementById("nomeUsuario").textContent = nome;
    document.getElementById("SenhaReplicacao").textContent = senha;
  };