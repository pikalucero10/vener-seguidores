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
    <option value="alcance">Alcance Instagram</option>
    <option value="comentarios-personalizados">Comentarios Personalizados</option>
    <option value="comentarios-aleatorios-masculinos">Comentarios Aleatorios Masculinos</option>
    <option value="comentarios+likes-cuanta-verificada">1 Comentario + Me gusta - Cuentas verificadas</option>
    <option value="vistas-todas-las-historias">Vistas a Todas las Historias</option>
    <option value="vistas+likes-historias">Vistas de Historias + Likes</option>
    <option value="perfil-instagram">Perfil Visita + Impresiones</option>
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

  // SERVICIOS PARA INSTAGRAM
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
            {
              nombre:
                "🔴 6250 - 🙂 🇦🇷 Instagram Argentina Seguidores | Máx 100K | Alta Calidad | R30 | 5K Por Dia - $2.71 por 1000",
              precio: 0.00271,
            },
            {
              nombre:
                "🔴 6579 - 🙂 Seguidores - Instagram | 100% Real Usuarios Organico | Calidad Premium - $2.30 por 1000",
              precio: 0.0023,
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
            {
              nombre:
                "🔴 6266 - ❤️ 🇦🇷 Instagram Argentina Like | Alta Calidad | R30 | 5K Por Dia - $0.98 por 1000",
              precio: 0.00098,
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
            {
              nombre:
                "🔴 6333 - 🇦🇷 Comentario - Instagram | Perfiles Argentinos | Max 30 - $0.98 por 1000",
              precio: 0.00098,
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
                "🔵 ID 1643 - Instagram - Reels - Reproducciones | 30seg - 4min | Rápido | R5 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "alcance":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Alcance-Instagram", [
            {
              nombre:
                "🔵 ID 2664 - Instagram - Alcance | 100% Rápido | Mundiales | R5 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "comentarios-personalizados":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Comentarios Personalizados-Instagram", [
            {
              nombre:
                "🔵 ID 2845 - Instagram - Comentarios | Perfil Real | Aleatorio | Max 30 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "comentarios-aleatorios-masculinos":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Comentarios Aleatorios Masculinos-Instagram", [
            {
              nombre:
                "🔵 ID 3113 - Instagram - Comentarios | Aleatorios | Masculinos | Max 30 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "comentarios+likes-cuanta-verificada":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones(
            "1 Comentario + Me gusta - Cuentas verificadas-Instagram",
            [
              {
                nombre:
                  "🔵 ID 3206 - Instagram - Comentario + MG | Perfiles Verificados | R10 - $0.89 por 1000",
                precio: 0.00089,
              },
            ]
          );
          break;
      }
      break;
    case "vistas-todas-las-historias":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Vistas a Todas las Historias-Instagram", [
            {
              nombre:
                "🔵 ID 3000 - Instagram - Vistas a todas las Historias | Rápido | 1K - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "vistas+likes-historias":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Vistas de Historias + Likes-Instagram", [
            {
              nombre:
                "🔵 ID 3246 - Instagram - Vistas Historias + MG | Max 30 | R5 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "perfil-instagram":
      switch (document.getElementById("redSocial").value) {
        case "instagram":
          agregarOpciones("Perfil Visita + Impresiones-Instagram", [
            {
              nombre:
                "🔵 ID 2760 - Instagram - Perfil Visita + Impresiones | R5 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 1234 - YouTube - Seguidores | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 2345 - YouTube - Likes | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 3456 - YouTube - Vistas | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
            },
          ]);
          break;
      }
      break;
    case "Minutos":
      switch (document.getElementById("redSocial").value) {
        case "youtube":
          agregarOpciones("Minutos-YouTube", [
            {
              nombre: "🔵 ID 4567 - YouTube - Minutos | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 5678 - TikTok - Seguidores | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 7890 - TikTok - Likes | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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
              nombre: "🔵 ID 8901 - TikTok - Vistas en vivo | Rápido | R50 - $0.89 por 1000",
              precio: 0.00089,
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

  // Calcular precios
  const precioSinGanancia = cantidadInput * precioPorUnidad;
  const precioConGanancia = precioSinGanancia * (1 + margenGanancia / 100);
  const precioTotalPesosSinGanancia = precioSinGanancia * tasaDeCambio;
  const precioTotalPesosConGanancia = redondearPrecio(
    precioConGanancia * tasaDeCambio
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

// Función para actualizar el tipo de cambio
function actualizarTipoDeCambio() {
  tasaDeCambio = parseFloat(document.getElementById("tipoCambio").value);
  // Después de actualizar el tipo de cambio, recalculamos el precio
  calcularPrecio();
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
  .getElementById("tipoCambio")
  .addEventListener("change", actualizarTipoDeCambio);
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

// Actualizar el tipo de cambio inicialmente
actualizarTipoDeCambio();
// Actualizar el tipo de red social inicialmente
actualizarTipoDeRed();
