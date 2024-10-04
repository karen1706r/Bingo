// Función para verificar si una columna está llena
function verificarColumnaLlena(letra) {
    const index = "BINGO".indexOf(letra);
    const cells = document.querySelectorAll('.bingo-container .bingo-card .bingo-cell');

    let llena = true;

    // Verificamos si todas las celdas de la columna están marcadas
    for (let i = 0; i < cells.length; i++) {
        if (i % 5 === index) { // Cambia el índice de acuerdo a la letra seleccionada
            if (!cells[i].classList.contains('marked')) {
                llena = false;
                break;
            }
        }
    }

    if (llena) {
        alert(`¡Columna ${letra} llena!`);
    }
}

// Función para rellenar el cartón con los números dados
function rellenarCarton(numeros, container) {
    const cells = container.querySelectorAll('.bingo-cell');
    
    // Rellenar cada celda del cartón
    for (let i = 0; i < cells.length; i++) {
        if (numeros[i] !== undefined) {
            cells[i].textContent = numeros[i]; // Asignar número a la celda
        }
    }
}

// Función para rellenar el cartón con el número seleccionado
function rellenarConNumero(letra, numero) {
    const index = "BINGO".indexOf(letra); // Obtiene el índice correspondiente a la columna (0 para B, 1 para I, etc.)
    const cells = document.querySelectorAll('.bingo-container .bingo-card .bingo-cell');

    cells.forEach((cell, i) => {
        // Verifica que la celda esté en la columna correcta (i % 5 === index) antes de marcar
        if (i % 5 === index && cell.textContent == numero) {
            cell.classList.toggle('marked'); // Marca o desmarca la celda

            // Verificar si la columna está llena después de marcar
            verificarColumnaLlena(letra);
        }
    });
}

// Función para limpiar todas las selecciones
function limpiarSelecciones() {
    const cells = document.querySelectorAll('.bingo-container .bingo-card .bingo-cell');
    cells.forEach(cell => {
        cell.classList.remove('marked'); // Eliminar la clase 'marked' de cada celda
    });
}

// Ejemplo de números para cada cartón
const numerosBingo1 = [4, 30, 34, 53, 61, 3, 17, 31, 47, 74, 1, 24, , 58, 66, 6, 20, 35, 46, 62, 9, 22, 40, 60, 67];
const numerosBingo2 = [5, 18, 45, 55, 65, 7, 20, 31, 51, 70, 2, 22, , 58, 61, 9, 27, 37, 50, 75, 15, 29, 33, 54, 66];
const numerosBingo3 = [5, 21, 33, 52, 66, 7, 19, 41, 55, 67, 6, 20, , 46, 72, 4, 16, 32, 49, 63, 10, 28, 45, 58, 65];
const numerosBingo4 = [7, 18, 36, 58, 74, 9, 30, 39, 48, 70, 2, 23, , 47, 67, 8, 26, 38, 49, 62, 10, 20, 45, 59, 64];

// Seleccionamos cada contenedor de cartón y rellenamos con números
const containers = document.querySelectorAll('.bingo-container');
rellenarCarton(numerosBingo1, containers[0]);
rellenarCarton(numerosBingo2, containers[1]);
rellenarCarton(numerosBingo3, containers[2]);
rellenarCarton(numerosBingo4, containers[3]);

// Funcionalidad para marcar las celdas al hacer clic
document.querySelectorAll('.bingo-cell').forEach(cell => {
    cell.addEventListener('click', function () {
        cell.classList.toggle('marked'); // Cambia el estado de marcado al hacer clic
    });
});

// Agregar evento al botón para rellenar los cartones
document.getElementById('mark-button').addEventListener('click', function () {
    const letra = document.getElementById('letter').value; // Selecciona la letra del dropdown
    const numero = document.getElementById('number').value; // Selecciona el número ingresado

    if (numero) {
        rellenarConNumero(letra, numero);
        
        // Limpiar el campo de número después de marcar
        document.getElementById('number').value = '';
    } else {
        alert('Por favor, introduce un número.');
    }
});

// Evento para el botón de limpiar
document.getElementById('clear-button').addEventListener('click', limpiarSelecciones);
