function salvar() {
  const tipo = document.getElementById("tipoIp").value;
    const ip = document.getElementById("ipPrimario").value;
    let ipRegex;
    if (tipo === "nat") {
        ipRegex = /^192\.168\.\d{1,3}\.\d{1,3}$/;
    } else {
        ipRegex = /^10\.d{1,3}$\.\d{1,3}\.\d{1,3}$/;
    }
    if (!ipRegex.test(ip)) {
        alert("O IP não está no formato correto para o tipo selecionado.");
        return;
    }
    localStorage.setItem("nomeUsuario", document.getElementById("usuarioReplicacao").value);
    localStorage.setItem("senhaReplicacao", document.getElementById("senhaReplicacao").value);
    localStorage.setItem("ipPrimario", document.getElementById("ipPrimario").value);
    localStorage.setItem("ipReplica", document.getElementById("ipReplica").value);
    localStorage.setItem("SenhaSuperUsuario", document.getElementById("SenhaSuperUsuario").value);
    localStorage.setItem("Versao", document.getElementById("Versao").value);
}
