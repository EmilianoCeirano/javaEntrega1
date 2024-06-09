function datoSueldo() {
    let sueldo = parseFloat(prompt("Por favor, ingresa tu sueldo mensual:"));
    while (isNaN(sueldo) || sueldo <= 0) {
        sueldo = parseFloat(prompt(" Ingresa un valor numérico positivo para tu sueldo:"));
    }
    console.log("Sueldo ingresado: $" + sueldo);
    return sueldo;
}


function datoGastos() {
    let gastos = [];
    let continuar = true;

    while (continuar) {
        let gasto = parseFloat(prompt("Ingresa un gasto mensual (o ingresa 0 para finalizar):"));
        if (gasto === 0) break;
        while (isNaN(gasto) || gasto < 0) {
            gasto = parseFloat(prompt(" Ingresa un valor numérico positivo para el gasto, o 0 para finalizar:"));
        }
        if (gasto > 0) {
            gastos.push(gasto);
            continuar = confirm("¿Queres ingresar otro gasto?");
        }
    }
    console.log("Gastos ingresados: " + gastos);
    return gastos;
}


function calcularMontoDisponible(sueldo, gastos) {
    let totalGastos = 0;
    for (let i = 0; i < gastos.length; i++) {
        totalGastos += gastos[i];
    }
    let montoDisponible = sueldo - totalGastos;
    console.log("Total de gastos: $" + totalGastos);
    console.log("Monto disponible: $" + montoDisponible);
    return montoDisponible;
}


function main() {
    alert("Buenas! Bienvenido al calculador de presupuesto mensual.");
    const sueldo = datoSueldo();
    const gastos = datoGastos();
    const montoDisponible = calcularMontoDisponible(sueldo, gastos);
    
    let mensaje = "Tu sueldo mensual es: $" + sueldo + "\n" +
                  "Tus gastos mensuales son: $" + gastos.join(", ") + "\n" +
                  "Monto disponible: $" + montoDisponible;
    
    if (montoDisponible < 0) {
        mensaje += "\nEstás en negativo, estas al horno";
    }
    
    alert(mensaje);
}

main();