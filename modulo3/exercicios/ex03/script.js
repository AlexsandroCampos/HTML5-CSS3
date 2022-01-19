var valores = document.getElementsByClassName('num');
var soma = 0;
for (let index = 0; index < valores.length; index++) {
    soma = soma + parseInt(valores[index].innerHTML);
}
valores[valores.length-1].innerHTML = soma;
