// Seleccionamos el contenedor del grid desde el DOM
const container = document.querySelector("#container");

// Seleccionamos el botón para cambiar el tamaño
const resizeBtn = document.querySelector("#resize");

// Tamaño inicial del grid (16x16)
let gridSize = 16;

/* ===========================
   FUNCIÓN PARA CREAR EL GRID
   =========================== */
function createGrid(size) {

  // Limpiamos el grid anterior (muy importante)
  container.innerHTML = "";

  // Calculamos el tamaño de cada cuadrado
  const squareSize = 960 / size;

  // Creamos size * size cuadrados
  for (let i = 0; i < size * size; i++) {

    // Creamos un div
    const square = document.createElement("div");

    // Le añadimos la clase square
    square.classList.add("square");

    // Asignamos tamaño dinámico
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Evento cuando el ratón entra
    square.addEventListener("mouseenter", () => {

      // Cambiamos el color del cuadrado
      square.style.backgroundColor = "white";
    });

    // Añadimos el cuadrado al contenedor
    container.appendChild(square);
  }
}

/* ===========================
   BOTÓN CAMBIAR TAMAÑO
   =========================== */
resizeBtn.addEventListener("click", () => {

  // Pedimos al usuario el tamaño
  let newSize = prompt(
    "Número de cuadrados por lado (máx 100):"
  );

  // Convertimos el texto a número
  newSize = Number(newSize);

  // Validamos el número
  if (newSize > 0 && newSize <= 100) {

    // Guardamos el nuevo tamaño
    gridSize = newSize;

    // Creamos el nuevo grid
    createGrid(gridSize);

  } else {

    // Mensaje de error si es inválido
    alert("Introduce un número entre 1 y 100");
  }
});

/* ===========================
   GRID INICIAL
   =========================== */

// Creamos el grid al cargar la página
createGrid(gridSize);