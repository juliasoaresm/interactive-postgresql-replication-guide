function salvar() {
    localStorage.setItem("usuarioReplicacao", document.getElementById("usuarioReplicacao").value);
    localStorage.setItem("senhaReplicacao", document.getElementById("senhaReplicacao").value);
    alert("Dados salvos.");
  }