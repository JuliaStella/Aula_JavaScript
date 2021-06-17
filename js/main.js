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
    
}; */

var data = new Date(); // mostra a data atual.
alert(data.getDay());