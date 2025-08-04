function salvar() {
    localStorage.setItem("usuarioReplicacao", document.getElementById("usuarioReplicacao").value);
    localStorage.setItem("senhaReplicacao", document.getElementById("senhaReplicacao").value);
    localStorage.setItem("ipPrimario", document.getElementById("ipPrimario").value);
    localStorage.setItem("ipReplica", document.getElementById("ipReplica").value);
    localStorage.setItem("SenhaSuperUsuario", document.getElementById("SenhaSuperUsuario").value);
    localStorage.setItem("Versao", document.getElementById("Versao").value);
  }