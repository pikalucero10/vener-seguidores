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
            {
              nombre:
                "🔵 ID 963 - Instagram - Seguidores con apariencia real - SIN CAIDAS - Max. 50K (caídas de menos del 5%)",
              precio: 0.001176,
            },
            {
              nombre:
                "🔵 ID 80 - Instagram Cuentas Verificadas 4 Seguidores",
              precio: 5.933,
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
                "🔵 ID 1346 - Instagram - Me gusta - América Latina- Max. 5k - R30 (CAIDA 4%)",
              precio: 0.0012,
            },
            {
              nombre:
                "🔵 Instagram - cuentas verificadas - 1 =  5 me gusta	",
              precio: 2.067,
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
            {
              nombre:
                "🔵ID 3387 - Instagram - Vistas Video/Reel (mas barato a prueba)",
              precio: 0.000048,
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
              nombre: "🔵 ID 3102 - TikTok - Seguidores con apariencia real - Max 70k - R30",
              precio: 0.00238,
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
              nombre: "🔵 ID 3349 - TikTok - Vistas de Video - Max 1000M - ACTUALIZADO",
              precio: 0.000002,
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
              nombre: "🔵 ID 2102 - TikTok - Me gusta - Max 100K (Caída: 3% al 5%)",
              precio: 0.00049,
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
function calcularPrecio() {
  const cantidadInput = parseFloat(document.getElementById("cantidad").value);
  const porcentajeCaidas = parseFloat(document.getElementById("caidas").value);
  const precioPorUnidad = parseFloat(document.getElementById("tipoServicio").value);
  const margenGanancia = parseFloat(document.getElementById("ganancia").value);

  // Verificar validez de los valores de entrada
  if (isNaN(cantidadInput) || isNaN(porcentajeCaidas) || isNaN(precioPorUnidad) || isNaN(margenGanancia)) {
    // Mostrar mensaje de error
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Por favor, introduce números válidos.";
    return;
  }

  // Obtener el tipo de cambio actual
  const tipoCambioActual = parseFloat(document.getElementById("tipoCambioActual").value);

  // Calcular cantidad con caídas
  const cantidadConCaidas = cantidadInput * (1 + porcentajeCaidas / 100);

  // Calcular precios
  const precioSinGanancia = cantidadConCaidas * precioPorUnidad;
  const precioConGanancia = precioSinGanancia * (1 + margenGanancia / 100);
  const precioTotalPesosSinGanancia = precioSinGanancia * tipoCambioActual;
  const precioTotalPesosConGanancia = redondearHaciaArriba(
    precioConGanancia * tipoCambioActual
  );

  // Redondear hacia arriba al múltiplo de 10 más cercano
  const precioTotalPesosConGananciaRedondeado = redondearHaciaArriba(precioTotalPesosConGanancia, 10);

  // Calcular cantidad total
  const cantidadTotal = cantidadInput + cantidadInput * (porcentajeCaidas / 100);

  // Mostrar resultado
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `Compras ${cantidadInput} + (${porcentajeCaidas}% = ${cantidadTotal.toFixed(2)}) a ${precioTotalPesosSinGanancia.toFixed(
    2
  )} pesos y los tienes que vender a ${precioTotalPesosConGananciaRedondeado.toFixed(
    2
  )} pesos.`;
}


// Función para redondear hacia arriba al múltiplo de 10 más cercano
function redondearHaciaArriba(numero, multiplo = 1) {
  return Math.ceil(numero / multiplo) * multiplo;
}

// Asignar evento de cambio a los elementos del DOM
document.getElementById("tipoCambioActual").addEventListener("change", calcularPrecio);

// Actualizar el tipo de red social inicialmente
actualizarTipoDeRed();
