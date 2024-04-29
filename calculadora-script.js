function copyToClipboard() {
  const displayValue = document.getElementById("display").value;
  navigator.clipboard.writeText(displayValue).then(function() {
    console.log("Texto copiado al portapapeles: " + displayValue);
  }, function(err) {
    console.error("No se pudo copiar el texto: ", err);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("display").focus();
});

document.addEventListener("keydown", function(event) {
  const key = event.key;
  const display = document.getElementById("display");

  // Evitar que se ejecute la acción predeterminada del navegador si el input está seleccionado
  if (display === document.activeElement) {
    event.preventDefault();
  }

  // Manejar las teclas permitidas
  if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === "." || key === "Enter" || key === "Escape" || key === "Backspace" || key === "Delete") {
    if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearDisplay();
    } else if (key === "Delete" || key === "Backspace") {
      deleteLastCharacter();
    } else {
      addToDisplay(key);
      highlightButton(key);
    }
  }
});

function addToDisplay(value) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  // Verificar si el valor es un punto y si ya hay un punto directamente antes
  if (value === '.' && currentValue.charAt(currentValue.length - 1) === '.') {
    return;
  }

  // Agregar el valor al display
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function deleteLastCharacter() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function highlightButton(key) {
  const button = document.querySelector(`[data-value="${key}"]`);
  if (button) {
    button.classList.add("button-key-active");
    setTimeout(function() {
      button.classList.remove("button-key-active");
    }, 100);
  }
}
