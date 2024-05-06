// Función para convertir dólares a pesos
function convertirAPesos() {
    const cantidadUSD = parseFloat(
      document.getElementById("cantidadDolares").value
    );
    const tipoCambioActual = parseFloat(
      document.getElementById("tipoCambio").value
    ); // Obtener el tipo de cambio actual
    const cantidadPesos = cantidadUSD * tipoCambioActual;
    document.getElementById("resultadoPesos").innerText = `${cantidadUSD.toFixed(
      2
    )} dólares son ${cantidadPesos.toFixed(2)} pesos.`;
  }
  