alert("Hola, vamos a calcular tu indice de masa corporal IMC, por favor a continuación ingresa los datos que se te solicitan")
var peso = parseInt(prompt("Ingresa tu peso especificado en kilogramos"))
var altura = parseInt(prompt("Ingresa tu estatura especificada en centimetros"))
var calcula_imc = parseInt(((peso / (altura ** 2)) * 10000 ))
switch (true){
  case (calcula_imc)<=18.5:
    alert("Tu IMC es inferior al normal, por favor consulta a tu medico familiar");
    break;
  case (calcula_imc)>18.5 && (calcula_imc)<=24.9:
    alert("Tu IMC es normal");
    break;
  case (calcula_imc)>25 && (calcula_imc)<=29.9:
    alert("Tu IMC es superior al normal, se recomienda hacer ejercicio");
    break;
  case (calcula_imc)>30:
    alert("Tienes obecidad, por favor consuta a tu medico familiar");
    break;
  default:
    alert("Por favor ingresa un dato valido");
    break;
}