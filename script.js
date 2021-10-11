let botao = document.getElementById("submitButton")
let form = document.getElementById("registro")

//formulario
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

botao.addEventListener("click", infoFormulario)

//API

const API_KEY = '993bc1cbb853af6db9b029fe4e141ab2';
const url = 'https://api.themoviedb.org/3/search/tv?api_key=993bc1cbb853af6db9b029fe4e141ab2'

const elementoBotao = document.querySelector('#pesquisa');
const elementoInput = document.querySelector('#buscaSeries');

elementoBotao.onclick = function(event){
    event.preventDefault(); 
    const value = elementoInput.value;

    const novaURL = url + '&query=' + value;

    fetch(novaURL)
        .then((res) => res.json)
        .then((data) => {
            console.log('Dados: ', data);
        })
        .catch((error) => {
            console.log('Erro: ', error);
        });
    console.log("Valor: ", value);
}

/* 
buscaSerie(api_url); */

//nao esta funcionando - nao retorna json - erro 404
/* function buscaSerie(url){
    fetch(url).then(res => res.json).then(data => {
        //nao printa
        console.log(data);
        //inicializando a função
        apareceSerie(data.results);
    })
} */


/* 
function apareceSerie(data){
    data.forEach(serie => {
        const serieElemento = document.createElement('div');
       serieElemento.classList.add ('serie');
       serieElemento.innerHTML = `
       <img src="img/got.jpeg">
                    
                    <div class="info-series">
                        <h4>Título da Série</h4>
                        <span class="nota">9,8</span>
                    </div>
                    <div class="sinopse">
                        <h4>Sinopse</h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
       
       `
    });
} */