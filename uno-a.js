var weigth = parseInt(prompt("ingresa tu peso en kilos"));
var height = parseInt(prompt("ingresa tu altura en centimetros"));
var imc = ((weigth / ( height ** 2 )) * 10000);
console.log (imc)
var lowerWeight = 18.5;
var normalWeigth = 18.6;
var overWeigth = 25;
var obesityWeigth = 30;
imc <= normalWeigth ? alert("tu IMC es de: "+ imc + " y tienes un peso inferior al normal") : 
imc >= normalWeigth && imc < overWeigth && imc < obesityWeigth ? alert("tu IMC es de: "+ imc + " y tienes un peso normal") : 
imc >= overWeigth && imc < obesityWeigth ? alert("tu IMC es de: "+ imc + " y tienes un peso superior al normal") : 
imc >= obesityWeigth ? alert("tu IMC es de: "+ imc + " y tienes obesidad") : alert("No hay datos");