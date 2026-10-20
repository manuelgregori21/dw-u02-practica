const prompt = require('prompt-sync')()

const nombre = prompt('Introduce su nombre')
console.log(`Hola, ${nombre}! Bienvenido al proyecto NPM`)

let juegos = [
  { id: 1, titulo: "Grand Theft Auto: San Andreas", genero: "Accion", empresa: "Rockstar Games", ano: 2004 },
  { id: 2, titulo: "The Last of Us", genero: "Supervivencia", empresa: "Naughty Dog", ano: 2013 },
  { id: 3, titulo: "Silent Hill 2", genero: "Terror", empresa: "Konami", ano: 2001 },
  { id: 4, titulo: "Kingdom Hearts 3", genero: "RPG", empresa: "Square Enix", ano: 2019 }
];


// 1. Mostrar entrada
function mostrarEntrada() {
  console.log("LISTA DE JUEGOS");
  for(const juego of lista){
    console.log(juego.id + ":" + juego.titulo + "-" + juego.genero + "-" + juego.empresa + "-" + juego.ano);
  }
}


//2. Anadir entrada
function anadirEntrada() {
  let titulo = prompt("Título del juego:");
  let genero = prompt("Género:");
  let empresa = prompt("Empresa:");
  let ano = Number(prompt("Año:"));



  juegos.push();
  console.log("Juego añadido");
}


// 3. Buscar por titulo
function buscarPorTitulo() {
    let texto = prompt("Introduce el título a buscar:");
}



//4. Filtrar por categoria
function filtrarPorCategoria() {
  let genero = prompt("Introduce el género a filtrar:");
}


//5. Filtrar por estado
function filtrarPorEstado() {
  let empresa = prompt("Introduce la empresa a filtrar:");
}


// 6. Modificar entrada
function modificarEntrada(id, nuevoTitulo, nuevoGenero, nuevaEmpresa, nuevoAno) {
let id = Number(prompt("ID del juego que quieres modificar:"));
    
}


// 7. Eliminar entrada
function eliminarEntrada() {
let id = Number(prompt("ID del juego a eliminar:"));


juegos.pop();
console.log("Juego eliminado");
}


// 8. Ordenar por valoración
function ordenarPorValoracion() {
let copia = [...juegos].sort((a, b) => a.empresa - b.empresa);
mostrarEntrada(copia);
    
}

// 9. Ordenar por fecha (por año)
function ordenarPorFecha() {
let copia = [...juegos].sort((a, b) => a.ano - b.ano);
mostrarEntrada(copia);

}

// 10. Ordenar por ID
function ordenarPorId() {
  let copia = [...juegos].sort((a, b) => a.id - b.id);
mostrarEntrada(copia);
  
}

function menu() {
  let opcion = "";

  while (opcion !== "0" && opcion !== null) {
    opcion = prompt(
      "1. Mostrar entradas\n" +
      "2. Añadir entrada\n" +
      "3. Buscar por título\n" +
      "4. Filtrar por categoría\n" +
      "5. Filtrar por estado\n" +
      "6. Modificar entrada\n" +
      "7. Eliminar entrada\n" +
      "8. Ordenar por valoración\n" +
      "9. Ordenar por fecha\n" +
      "10. Ordenar por ID\n" +
      "0. Salir"
    );

    switch (opcion) {
      case "1": mostrarEntradas(); break;

      case "2": anadirEntrada(); break;
      
      case "3": buscarPorTitulo(); break;
      
      case "4": filtrarPorCategoria(); break;
      
      case "5": filtrarPorEstado(); break;
      
      case "6": modificarEntrada(); break;
      
      case "7": eliminarEntrada(); break;
      
      case "8": ordenarPorValoracion(); break;
      
      case "9": ordenarPorFecha(); break;
      
      case "10": ordenarPorId(); break;
      
      case "0":
      
      case null:
        console.log("Saliendo...");
        break;
      default:
        alert("Opción no válida");
    }
  }
}

menu();