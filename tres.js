var material = prompt("Ingresa el material a consultar:");
let densidad = [['Acero', 7850], 
                ['Cobre', 8940],
                ['Oro', 19300],
                ['Plata', 10490],
                ['Diamante', 3515]];
var side = parseFloat(prompt("Ingresa el lado del cubo que quieres consultar (en Metros):"));
var vol = side ** 3;

switch (material) {
    case densidad[0][0]:
        var cubeWeight = vol * densidad[0][1];
        alert(`El peso del cubo de ${densidad[0][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[1][0]:
        var cubeWeight = vol * densidad[1][1];
        alert(`El peso del cubo de ${densidad[1][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[2][0]:
        var cubeWeight = vol * densidad[2][1];
        alert(`El peso del cubo de ${densidad[2][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[3][0]:
        var cubeWeight = vol * densidad[3][1];
        alert(`El peso del cubo de ${densidad[3][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[4][0]:
        var cubeWeight = vol * densidad[4][1];
        alert(`El peso del cubo de ${densidad[4][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    case densidad[5][0]:
        var cubeWeight = vol * densidad[5][1];
        alert(`El peso del cubo de ${densidad[5][0]} y de ${vol} metros cúbicos es de ${cubeWeight}.`);
        break;
    default:
        alert("El material a consultar no se encuentra en la Base de Datos. Favor de hacer el cálculo manual!")
        break;
}