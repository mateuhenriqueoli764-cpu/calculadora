function calcular(operacao) {
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
let resultado;
switch (operacao) {
case "somar":
resultado = num1+num2;
break;
case "subtrair":
resultado = num1-num2;
break;
case "multiplicar":
resultado = num1 * num2;
break;
case "dividir":
resultado = num2 !== 0 ? num1 / num2:"Erro: divisão por zero";
break;
default:
resultado = "Operação inválida";
}
document.getElementById("resultado").innerText="resultado:"+resultado;
}