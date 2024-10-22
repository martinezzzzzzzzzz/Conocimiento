function calcularTotalFinal(cuentaTotal, calidadServicio) {

    let propinaPorcentaje;
    switch (calidadServicio) {
        case 'excelente':
            propinaPorcentaje = 0.20;
            break;
        case 'bueno':
            propinaPorcentaje = 0.15;
            break;
        case 'regular':
            propinaPorcentaje = 0.10;
            break;
        default:
            alert("La calidad del servicio debe ser 'excelente', 'bueno' o 'regular'.");
            return;
    }

    const propina = cuentaTotal * propinaPorcentaje;

    let descuento = 0;
    if (cuentaTotal > 200000) {
        descuento = cuentaTotal * 0.20;
    } else if (cuentaTotal > 100000) {
        descuento = cuentaTotal * 0.10;
    }

    const totalFinal = cuentaTotal + propina - descuento;

    alert(`Total de la cuenta: $${cuentaTotal.toFixed(2)}\n` +
          `Propina: $${propina.toFixed(2)}\n` +
          `Descuento: $${descuento.toFixed(2)}\n` +
          `Total final a pagar: $${totalFinal.toFixed(2)}`);
}

const cuentaTotalInput = prompt("Ingrese el total de la cuenta:");
const calidadServicioInput = prompt("Ingrese la calidad del servicio (excelente, bueno, regular):");

const cuentaTotal = parseFloat(cuentaTotalInput);

if (isNaN(cuentaTotal) || cuentaTotal < 0) {
    alert("El total de la cuenta debe ser un número válido mayor o igual a 0.");
} else {
    
    calcularTotalFinal(cuentaTotal, calidadServicioInput.toLowerCase());
}
