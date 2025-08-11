function salvar() {
    localStorage.setItem("nomeUsuario", document.getElementById("usuarioReplicacao").value);
    localStorage.setItem("senhaReplicacao", document.getElementById("senhaReplicacao").value);
    localStorage.setItem("ipPrimario", document.getElementById("ipPrimario").value);
    localStorage.setItem("ipReplica", document.getElementById("ipReplica").value);
    localStorage.setItem("SenhaSuperUsuario", document.getElementById("SenhaSuperUsuario").value);
    localStorage.setItem("Versao", document.getElementById("Versao").value);
    if (document.getElementById("Versao").value > "18") {
        alert("Versão inválida, por favor, verifique a versão do seu sistema.");
    }
    const salvo = document.querySelector(".submit");
    if (salvo) {
        salvo.classList.remove("Salvar");
        salvo.innerText = "Salvo";

        setTimeout(() => {
                salvo.innerText = "Salvar";
        }, 500);
    }
}
