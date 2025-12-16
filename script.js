/* ===============================
   VARIABLES GLOBALES
   =============================== */

// Tamaño inicial del grid (16x16)
let gridSize = 16;

// Color actual para pintar
let currentColor = "#000000";

// Referencias al DOM
const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size-btn");
const clearBtn = document.querySelector("#clear-btn");
const colorPicker = document.querySelector("#color-picker");


/* ===============================
   CREAR GRID
   =============================== */

function createGrid(size) {
  // Limpiamos el grid anterior
  container.innerHTML = "";

  // Calculamos tamaño de cada celda
  const squareSize = 960 / size;

  // Creamos size * size cuadrados
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    // Ajustamos tamaño
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Evento hover para pintar
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = currentColor;
    });

    container.appendChild(square);
  }
}


/* ===============================
   CAMBIAR TAMAÑO DEL GRID
   =============================== */

sizeBtn.addEventListener("click", () => {
  let newSize = prompt("Introduce tamaño del grid (máx 100):");

  if (newSize === null) return;

  newSize = Number(newSize);

  if (newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Número inválido (1 - 100)");
  }
});


/* ===============================
   CAMBIAR COLOR
   =============================== */

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
});


/* ===============================
   LIMPIAR GRID
   =============================== */

clearBtn.addEventListener("click", () => {
  createGrid(gridSize);
});


/* ===============================
   INICIALIZACIÓN
   =============================== */

// Creamos el grid inicial
createGrid(gridSize);