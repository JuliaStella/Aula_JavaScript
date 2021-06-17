/* --AULA DE STRING--
var nome = "Júlia Stella";
var idade = 17;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!";
alert( nome  +  " tem "  +  idade  +  " anos " );
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLowerCase());
 O "toLowercase()" deixa tudo minusculo; Já o "toUpperCase" deixa tudo maiusculo.*/

 /*  --AULA DE ARRAY--
 var lista = ["abacate", "mamão", "banana"];
 lista.push("maçã", "goiaba"); // add. elemeto no array.
 lista.pop("maçã"); // retira itens do array.
 console.log(lista[0]); // tamanho ada lista.
 console.log(lista.toString()[0]); // transforma em letas string.
 console.log(lista.join(" - ")); // Mudar as "" para qualque outro sinal, também transformando em uma string.
//
var fruta = {nome:"banana", cor: "vermelha"}; // seria um objeto json.
console.log(fruta);
//
var frutas = [{nome:"banana", cor: "vermelha"}, {nome:"caja", cor: "laranja"}];
console.log(frutas);
alert(frutas[1].nome); // fica parecendo um dicionário*/


/* --AULA DE CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE--

var idade = prompt("Qual sua idade ?"); // comando prompt gera uma pergunta.

if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};

var contagem;
for (let contagem = 0; contagem <= 5; contagem++) {
    alert(contagem);
    
}; 

var data = new Date(); // mostra a data atual.
alert(data.getDay());// os .get...(), podem mostra mês adicionando mais 1 (data.get...()+1), como também pode mostrar minutos e outros.
*/

/* --AULA DE FUNÇÃO--

function soma(n1, n2) {
    return n1 + n2;
}

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
var validar = 0;
function validaIdade(idade){
    if (idade >= 18) {
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validar);
//alert(soma(5, 10));
// alert(setReplace("vai Japão", "Japão", "Brasil"));*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
     console.log(document.getElementById("agradecimento"));
     //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.instagram.com/");
    window.location.href = "https://www.instagram.com/";
}
function trocar(elemeto) {
    //document.getElementById("maousemove").innerHTML = "<b>Obrigado por passar o mause</b>";
    elemeto.innerHTML = "<b>Obrigado por passar o mause</b>";
    //balert("trcar texto")
}
function voltar(elemeto) {
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mause aqui</b>";
 elemeto.innerHTML = "<b>Passe o mause aqui</b>";
}
function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
} 