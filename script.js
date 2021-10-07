let botao = document.getElementById("submitButton")
let form = document.getElementById("registro")

function infoFormulario () {
    let inputName = document.getElementById("nome")
    let inputEmail = document.getElementById("email")
    let inputCelular = document.getElementById("celular")

    let inputNameValue = inputName.value;
    console.log(inputNameValue);
    console.log(inputName);
    let inputEmailValue = inputEmail.value;
    console.log(inputEmailValue);
    let inputCelularValue = inputCelular.value;

    const erros = [];

    const divErros = document.createElement("div");

    if (!inputNameValue || !inputEmailValue || !inputCelularValue) {
        erros.push("Preencha todos os campos do formulário para realizar o cadastro!")
        divErros.className = "divErro"
        divErros.innerHTML= erros
        form.appendChild(divErros);
    }

    if(erros.length === 0) {
        const formulario = document.getElementById("registro");
        if(confirm("Você quer realmente mandar essa mensagem?")) {
            formulario.submit();
        }
    } 
}
//teste
botao.addEventListener("click", infoFormulario)

