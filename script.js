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
const url = 'https://api.themoviedb.org/3/search/tv?&language=pt-BR&api_key=993bc1cbb853af6db9b029fe4e141ab2'
const url_imagem = 'https://image.tmdb.org/t/p/w500';

const elementoBotao = document.querySelector('#pesquisa');
const elementoInput = document.querySelector('#buscaSeries');
const seriesPesquisadas = document.querySelector('.series-Pesquisadas');


function serieSection(series){
    return series.map((serie) => {
        return`
        <div class="series">
            <img src=${url_imagem + serie.poster_path} id-serie=${serie.id} />
            <h3> ${serie.name}</h3>
            <h4>${serie.overview}</h4>
        </div>
        `;                               
    })
    
}
/* <h3> ${serie.name}</h3>
            <h4>${serie.overview}</h4> */

elementoBotao.onclick = function(event){
    event.preventDefault(); 
    const value = elementoInput.value;

    const novaURL = url + '&query=' + value;

    fetch(novaURL)
        .then((res) => res.json())
        .then((data) => {
            //data.results [];
            const series = data.results;
            const blocoSeries = serieSection(series);
            console.log(document.querySelector('.series-Pesquisadas')); 
            console.log(seriesPesquisadas.children);
            seriesPesquisadas.innerHTML = blocoSeries;
            console.log('Dados: ', data);
            
        })
        .catch((error) => {
            console.log('Erro: ', error);
        });
    console.log("Valor: ", value);
}
