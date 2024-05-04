// Variables globales
let tasaDeCambio = 1050; // Valor inicial del tipo de cambio

// Función para agregar opciones al selector de tipo de servicio
function agregarOpciones(nombreServicio, opciones) {
  const selectServicio = document.getElementById("tipoServicio");

  // Limpiar opciones anteriores
  selectServicio.innerHTML = "";

  // Agregar nuevas opciones
  opciones.forEach((opcion) => {
    const opcionElemento = document.createElement("option");
    opcionElemento.value = opcion.precio.toFixed(6);
    opcionElemento.textContent = opcion.nombre; // Solo mostrar el nombre del servicio
    selectServicio.appendChild(opcionElemento);
  });

  // Mostrar descripción del servicio
  if (opciones.length > 0) {
    mostrarDescripcion(nombreServicio, opciones[0].descripcion);
  }
}

// Función para actualizar el tipo de red social seleccionada
function actualizarTipoDeRed() {
  const redSocialSeleccionada = document.getElementById("redSocial").value;
  const etiquetaServicio = document.getElementById("etiqueta-servicio");
  const selectServicio = document.getElementById("servicio");

  // Limpiar opciones anteriores
  selectServicio.innerHTML = "";

  // Definir las opciones de servicio según la red social seleccionada
  switch (redSocialSeleccionada) {
    case "instagram":
      etiquetaServicio.textContent =
        "Selecciona el tipo de servicio (Instagram):";
      agregarOpcionesInstagram();
      break;
    case "youtube":
      etiquetaServicio.textContent =
        "Selecciona el tipo de servicio (YouTube):";
      agregarOpcionesYouTube();
      break;
    case "tiktok":
      etiquetaServicio.textContent = "Selecciona el tipo de servicio (TikTok):";
      agregarOpcionesTikTok();
      break;
    case "Facebook":
      etiquetaServicio.textContent = "Selecciona el tipo de servicio (Facebook):";
      agregarOpcionesFacebook();
      break;
  }

  // Actualizar el precio después de seleccionar la red social
  actualizarPrecio();
}

// Función para agregar opciones de servicio para Instagram
function agregarOpcionesInstagram() {
  const selectServicio = document.getElementById("servicio");
  selectServicio.innerHTML = `
    <option value="seguidores">Seguidores</option>
    <option value="meGusta">Likes</option>
    <option value="Guardados">Guardados</option>
    <option value="comentarios">Comentarios</option>
    <option value="vistas-reels">Vistas Reels</option>
  `;
}

// Función para agregar opciones de servicio para YouTube
function agregarOpcionesYouTube() {
  const selectServicio = document.getElementById("servicio");
  selectServicio.innerHTML = `
    <option value="Seguidores">Seguidores</option>
    <option value="Likes">Likes</option>
    <option value="Vistas">Vistas</option>
    <option value="Minutos">Minutos</option>
  `;
}

// Función para agregar opciones de servicio para TikTok
function agregarOpcionesTikTok() {
  const selectServicio = document.getElementById("servicio");
  selectServicio.innerHTML = `
    <option value="seguidores-tiktok">Seguidores TikTok</option>
    <option value="vistas-tiktok">Vistas TikTok</option>
    <option value="likes-tiktok">Likes TikTok</option>
    <option value="vistas vivo">Vistas vivo TikTok</option>
  `;
}

// Función para agregar opciones de servicio para Facebook
function agregarOpcionesFacebook() {
  const selectServicio = document.getElementById("servicio");
  selectServicio.innerHTML = `
    <option value="seguidores-Facebook">Seguidores Facebook</option>
  `;
}

// Función para actualizar el precio según el tipo de servicio seleccionado
function actualizarPrecio() {
  const servicioSeleccionado = document.getElementById("servicio").value;

  // Limpiar opciones anteriores
  const selectServicio = document.getElementById("tipoServicio");
  selectServicio.innerHTML = "";

  // Definir los precios para cada tipo de servicio
  switch (servicioSeleccionado) {
    case "seguidores":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Seguidores-Instagram", [
            {
              nombre:
                "🔵 ID 1760 - Instagram - Seguidores con apariencia real - R60 - Max. 500k (caídas de menos del 5%)",
              precio: 0.000628,
            },
          ]);
          break;
      }
      break;
    case "meGusta":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Likes-Instagram", [
            {
              nombre:
                "🔵 ID 3170 - Instagram - Me gusta - Alta calidad - Mundiales, Brasil, Latinos y USA - Max 20K 🔥",
              precio: 0.0001,
            },
            
          ]);
          break;
      }
      break;
    case "Guardados":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Guardados-Instagram", [
            {
              nombre:
                "🔵 ID 2584 - Instagram - Guardados/Grabados | Rápido | R10 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "comentarios":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Comentarios-Instagram", [
            {
              nombre:
                "🔵 ID 2060 - Instagram - Comentarios | 100% Perfil Real | Largo/Personalizado/Emoji",
              precio: 0.002,
            },
          ]);
          break;
      }
      break;
    case "vistas-reels":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Vistas Reels-Instagram", [
            {
              nombre:
                "🔵ID 1733 - Instagram - Vistas - Max. 10M",
              precio: 0.000075,
            },
          ]);
          break;
      }
      break;


    // SERVICIOS PARA YOUTUBE
    case "Seguidores":
      switch (document.getElementById("redSocial").value) {
        case "youtube":
          agregarOpciones("Seguidores-YouTube", [
            {
              nombre: " 7780 - 𝘾𝙃𝙀𝘼𝙋 📹 Youtube Subscribers | 30 Days Refill ♻️ | 500 Per Day - $3.25 por 1000",
              precio: 0.00325,
            },
          ]);
          break;
      }
      break;
    case "Likes":
      switch (document.getElementById("redSocial").value) {
        case "youtube":
          agregarOpciones("Likes-YouTube", [
            {
              nombre: "🔵 ID 3269 - Youtube - Me gusta en video - R30 - Max 5K",
              precio: 0.000587,
            },
          ]);
          break;
      }
      break;
    case "Vistas":
      switch (document.getElementById("redSocial").value) {
        case "youtube":
          agregarOpciones("Vistas-YouTube", [
            {
              nombre: "ID 2311 - YouTube - Vistas - Fuente FB+TW+IG - 1 a 2 minutos de retencion - Max 1M - R30",
              precio: 0.002712,
            },
          ]);
          break;
      }
      break;

    // SERVICIOS PARA TIKTOK
    case "seguidores-tiktok":
      switch (document.getElementById("redSocial").value) {
        case "tiktok":
          agregarOpciones("Seguidores-TikTok", [
            {
              nombre: "🔵 ID 3091 - TikTok - Seguidores - Max 90k - R30 ⚡",
              precio: 0.000782,
            },
          ]);
          break;
      }
      break;
    case "vistas-tiktok":
      switch (document.getElementById("redSocial").value) {
        case "tiktok":
          agregarOpciones("Vistas-TikTok", [
            {
              nombre: "🔵 ID 190 - TikTok - Vistas de Video - Max 10M - - ACTUALIZADO",
              precio: 0.000007,
            },
          ]);
          break;
      }
      break;
    case "likes-tiktok":
      switch (document.getElementById("redSocial").value) {
        case "tiktok":
          agregarOpciones("Likes-TikTok", [
            {
              nombre: "🔵 ID 195 - TikTok - Me gusta - Max 50K",
              precio: 0.0006,
            },
          ]);
          break;
      }
      break;
    case "vistas vivo":
      switch (document.getElementById("redSocial").value) {
        case "tiktok":
          agregarOpciones("Vistas vivo-TikTok", [
            {
              nombre: "🔵 ID 2884- TikTok - Vistas de transmisión en vivo (30 minutos) - Max 5k",
              precio: 0.00069,
            },
          ]);
          break;
      }
      break;

    // SERVICIOS PARA FACEBOOK
    case "seguidores-Facebook":
      switch (document.getElementById("redSocial").value) {
        case "Facebook":
          agregarOpciones("Seguidores-Facebook", [
            {
              nombre: "🔵 ID 2085 - Facebook - Seguidores de Perfil, Página clásica/Nueva version - Max 5k",
              precio: 0.00126,
            },
          ]);
          break;
      }
      break;
  }
}


// Función para mostrar la descripción del servicio
function mostrarDescripcion(nombreServicio, descripcion) {
  const descripcionElemento = document.getElementById("descripcionServicio");
  descripcionElemento.innerHTML = `<strong>${nombreServicio}:</strong> ${descripcion}`;
}

// Función para calcular el precio de compra y venta
function calcularPrecio() {
  const cantidadInput = parseFloat(document.getElementById("cantidad").value);
  const precioPorUnidad = parseFloat(
    document.getElementById("tipoServicio").value
  );
  const margenGanancia = parseFloat(document.getElementById("ganancia").value);

  // Verificar validez de los valores de entrada
  if (isNaN(cantidadInput) || isNaN(precioPorUnidad) || isNaN(margenGanancia)) {
    // Mostrar mensaje de error
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Por favor, introduce números válidos.";
    return;
  }

  // Obtener el tipo de cambio actual
  const tipoCambioActual = parseFloat(document.getElementById("tipoCambioActual").value);

  // Calcular precios
  const precioSinGanancia = cantidadInput * precioPorUnidad;
  const precioConGanancia = precioSinGanancia * (1 + margenGanancia / 100);
  const precioTotalPesosSinGanancia = precioSinGanancia * tipoCambioActual;
  const precioTotalPesosConGanancia = redondearPrecio(
    precioConGanancia * tipoCambioActual
  );

  // Redondear hacia arriba al múltiplo de 10 más cercano
  const precioTotalPesosConGananciaRedondeado = redondearHaciaArriba(precioTotalPesosConGanancia, 10);

  // Mostrar resultado
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `Compras los ${cantidadInput} a ${precioTotalPesosSinGanancia.toFixed(
    2
  )} pesos y los tienes que vender a ${precioTotalPesosConGananciaRedondeado.toFixed(
    2
  )} pesos.`;
}

// Función para redondear hacia arriba al múltiplo de 10 más cercano
function redondearHaciaArriba(numero, multiplo) {
  return Math.ceil(numero / multiplo) * multiplo;
}

// Función para convertir dólares a pesos
function convertirAPesos() {
  const cantidadUSD = parseFloat(
    document.getElementById("cantidadDolares").value
  );
  const cantidadPesos = cantidadUSD * tasaDeCambio;
  document.getElementById("resultadoPesos").innerText = `${cantidadUSD.toFixed(
    2
  )} dólares son ${cantidadPesos.toFixed(2)} pesos.`;
}

// Función para convertir pesos a dólares
function convertirADolares() {
  const cantidadPesos = parseFloat(
    document.getElementById("cantidadPesos").value
  );
  const cantidadDolares = cantidadPesos / tasaDeCambio;
  document.getElementById(
    "resultadoDolares"
  ).innerText = `${cantidadPesos.toFixed(
    2
  )} pesos son ${cantidadDolares.toFixed(2)} dólares.`;
}

// Función para redondear precios a dos decimales
function redondearPrecio(precio) {
  return Math.round(precio * 100) / 100;
}

// Asignar eventos a los elementos del DOM
document.getElementById("calcular").addEventListener("click", calcularPrecio);
document
  .getElementById("tipoCambioActual")
  .addEventListener("change", calcularPrecio);
document
  .getElementById("cantidadDolares")
  .addEventListener("input", convertirAPesos);
document
  .getElementById("cantidadPesos")
  .addEventListener("input", convertirADolares);
document
  .getElementById("redSocial")
  .addEventListener("change", actualizarTipoDeRed);
document
  .getElementById("servicio")
  .addEventListener("change", actualizarPrecio);

// Actualizar el tipo de red social inicialmente
actualizarTipoDeRed();
