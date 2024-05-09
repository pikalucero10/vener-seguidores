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

// Función para convertir pesos a dólares
function convertirADolares() {
  const cantidadPesos = parseFloat(
    document.getElementById("cantidadPesos").value
  );
  const tipoCambioActual = parseFloat(
    document.getElementById("tipoCambio").value
  ); // Obtener el tipo de cambio actual
  const cantidadUSD = cantidadPesos / tipoCambioActual;
  document.getElementById("resultadoDolares").innerText = `${cantidadPesos.toFixed(
    2
  )} pesos son ${cantidadUSD.toFixed(2)} dólares.`;
}
