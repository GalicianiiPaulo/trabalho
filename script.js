document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para verificar os dados

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value;

    // Validação simples de formato de e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailValue)) {
        // Se o e-mail for inválido, mostra a mensagem de erro
        emailError.style.display = "block";
    } else {
        // Se o e-mail for válido, esconde a mensagem de erro
        emailError.style.display = "none";
        alert("Formulário enviado com sucesso!");
        // Aqui você pode fazer algo como enviar os dados para um servidor
    }
});
