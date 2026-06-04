document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let cpf = document.getElementById("CPF").value.replace(/\D/g, '');

  if (cpf.length != 11) {
    alert("CPF inválido, digite 11 números.");
    return;
  }

  document.getElementById("Assinatura").style.display = "flex";
});

function fechar() {
  document.getElementById("Assinatura").style.display = "none";
  location.reload();
}

