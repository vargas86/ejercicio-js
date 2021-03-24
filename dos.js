alert("Hola, vamos a calcular tu altura de acuerdo a tu pais de origen");
var sexo = prompt("Ingresa tu genero. Escribe una M para masculino o una F para femenino")
var estatura = prompt("Ingresa tu estatura en centimetros")
var pais_residencia = prompt("Ingresa tu pais de origen: MX para México, AU para Australia, CA para Canada, BR para Brazil, RU para Reuno Unido")
switch (true) {
  case pais_residencia == "MX" && sexo == "M" && estatura < 170:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "M" && estatura > 170:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "M" && estatura == 170:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura < 160.8:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura > 160.8:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura == 160.8:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura < 179.2:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura > 179.2:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura == 179.2:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura < 165.9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura > 165.9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura == 165.9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura < 178.1:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura > 178.1:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura == 178.1:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura < 163,9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura > 163,9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura == 163,9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura < 173.6:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura > 173.6:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura == 173.6:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura < 160.9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura > 160.9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura == 160.9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura < 177.5:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura > 177.5:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura == 177.5:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura < 164.4:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura > 164.4:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura == 164.4:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia != "MX" || pais_residencia != "AU" || pais_residencia != "CA" || pais_residencia != "BR" || pais_residencia != "RU":
    alert("El pais seleccionado no exite, intentalo nuevamente")
    break;
}