
var numeroSorteio = document.getElementById("numero");
var nomeSorteio = document.getElementById("nome");
var voltar = document.getElementById("voltar");
var voltarDois = document.getElementById("voltarDois");
var input = document.querySelector("#pegarNomes");
var adicionarPessoa = document.querySelector("#adicionar");
var listaNomes = [];

numeroSorteio.addEventListener("click", function () { 

    document.getElementById("sortNumero").style.display = "block";
    document.getElementById("sortNome").style.display = "none";
    document.getElementById("content").style.display = "none";
 })

nomeSorteio.addEventListener("click", function () {  
    document.getElementById("sortNumero").style.display = "none";
    document.getElementById("sortNome").style.display = "block";
    document.getElementById("content").style.display = "none";
 })

voltar.addEventListener("click", function(){
    document.getElementById("sortNumero").style.display = "none";
    document.getElementById("sortNome").style.display = "none";
    document.getElementById("content").style.display = "block";
})

voltarDois.addEventListener("click", function(){
    document.getElementById("sortNumero").style.display = "none";
    document.getElementById("sortNome").style.display = "none";
    document.getElementById("content").style.display = "block";
})

function sorteio(){
    let NumPessoas = document.getElementById("qntd").value;

    let NumSorteado = Math.round(Math.random() * (NumPessoas - 1) + 1)   //ver dps cm o leo como fazer para o não dar p passar numero negativo

    document.getElementById("resultadoSortNum").innerHTML = NumSorteado
}


function criarPessoas(){
    let novoNome = input.value;
    
    listaNomes.push(novoNome);   

    let ul = document.getElementById('lista');

    let li = document.createElement("li");

    li.innerText = novoNome;

    ul.append(li);

    input.value = "";
    //let excluir = document.createElement("p");
    //excluir.innerText = "X";

    //excluir.setAttribute("onclick", "deletar()")

    //ul.appendChild(excluir);
}

function sortearNome(){
    let indexSorteado = Math.floor(Math.random() * listaNomes.length);

    let nomeSorteio = listaNomes[indexSorteado];

    let n = document.getElementById("resutadoNome");
    n.innerText = `${nomeSorteio}`
}

//function removerPessoas(){

    //let ul = document.getElementById('lista');

    //let teste = listaNomes.pop();
    
    
    //console.log(listaNomes);
    

    //ver o pq não está dando certo
//}
