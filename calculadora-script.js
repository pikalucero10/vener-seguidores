document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("display").focus();
});

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === "Enter" || key === "Escape" || key === "Delete" || key === "Backspace" || key === ".") {
    if (key === "Enter") {
      calculate();
    } else if (key === "Delete") {
      clearDisplay();
    } else if (key === "Backspace") {
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

  // Si el valor es un punto o una coma y ya hay un punto en el display, no hacemos nada
  if ((value === '.' || value === ',') && currentValue.includes('.')) {
    return;
  }

  // Reemplazamos la coma por un punto si es necesario
  if (value === ',') {
    value = '.';
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastCharacter() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function highlightButton(key) {
  const button = document.querySelector(`[data-value="${key}"]`);
  button.classList.add("button-key-active");
  setTimeout(function() {
    button.classList.remove("button-key-active");
  }, 100);
}
