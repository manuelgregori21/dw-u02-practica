const prompt = require('prompt-sync')()

const nombre = prompt('Introduce su nombre')
console.log(`Hola, ${nombre}! Bienvenido al proyecto NPM`)

// lista de juegos con sus atributos
const juegos = [
  { id: 1, titulo: 'Grand Theft Auto: San Andreas', genero: 'Accion', empresa: 'Rockstar Games', ano: 2004, valoracion: 9.5 },
  { id: 2, titulo: 'The Last of Us', genero: 'Supervivencia', empresa: 'Naughty Dog', ano: 2013, valoracion: 9.0 },
  { id: 3, titulo: 'Silent Hill 2', genero: 'Terror', empresa: 'Konami', ano: 2001, valoracion: 8.8 },
  { id: 4, titulo: 'Kingdom Hearts 3', genero: 'RPG', empresa: 'Square Enix', ano: 2019, valoracion: 9.0 }
]

// 1. Mostrar entrada
function mostrarEntradas (lista = juegos) {
  console.log('LISTA DE JUEGOS')
  for (const juego of lista) {
    console.log(juego.id + ':' + juego.titulo + '-' + juego.genero + '-' + juego.empresa + '-' + juego.ano + '-' + juego.valoracion)
  }
}

// 2. Anadir entrada
function anadirEntrada () {
  const titulo = prompt('Título del juego:')
  const genero = prompt('Género:')
  const empresa = prompt('Empresa:')
  const ano = Number(prompt('Año:'))
  const valoracion = Number(prompt('Valoración:'))

  // Añadir nuevo id
  let nuevoId = 1
  for (const juego of juegos) {
    if (juego.id >= nuevoId) {
      nuevoId = juego.id + 1
    }
  }

  juegos.push({ id: nuevoId, titulo, genero, empresa, ano, valoracion })
  console.log('Juego añadido')
}

// 3. Buscar por titulo
function buscarPorTitulo () {
  const texto = prompt('Introduce el título a buscar:')
  const juegoTitulo = juegos.find(juegos => juegos.titulo === 4)
  mostrarEntradas(juegoTitulo)
}

// 4. Filtrar por categoria
function filtrarPorCategoria () {
  const genero = prompt('Introduce el género a filtrar:')
  const juegoGenero = juegos.filter(juegos => juegos.genero === 4) // juegos.filter = devuelve un nuevo array con todos los elementos que cumplen la condición
  mostrarEntradas(juegoGenero)
}

// 5. Filtrar por estado
function filtrarPorEstado () {
  const empresa = prompt('Introduce la empresa a filtrar:')
  const juegoEmpresa = juegos.filter(juegos => juegos.empresa === 4)
  mostrarEntradas(juegoEmpresa)
}

// 6. Modificar entrada
function modificarEntrada () {
  const id = Number(prompt('ID del juego que quieres modificar:'))
  const juego = juegos.find(item => item.id === id) // juegos.find = devuelve el primer elemeto que cumpla la condicion o undefined

  if (juego) {
    juego.titulo = prompt('Nuevo título:', juego.titulo)
    juego.genero = prompt('Nuevo género:', juego.genero)
    juego.empresa = prompt('Nueva empresa:', juego.empresa)
    juego.ano = Number(prompt('Nuevo año:', juego.ano))
    console.log('Juego modificado correctamente.')
  } else {
    console.log('No se ha encontrado ningún juego con ese ID.')
  }
}

// 7. Eliminar entrada
function eliminarEntrada () {
  const id = Number(prompt('ID del juego a eliminar:'))
  const juego = juegos.findIndex(item => item.id === id) // juegos.findIndex = devuelve el indice o -1

  if (juego !== -1) {
    juegos.splice(juego, 1) // splice para eliminar, modificar o sustituir
    console.log('Juego eliminado correctamente.')
  } else {
    console.log('No se ha encontrado ningún juego con ese ID.')
  }
}
// juegos.pop() = elimina la ultima posicion
// juegos.shift() = elimina la primera posicion

// 8. Ordenar por valoración
function ordenarPorValoracion () {
  const copia = [...juegos].sort((a, b) => a.valoracion - b.valoracion)
  mostrarEntradas(copia)
}

// 9. Ordenar por fecha (por año)
function ordenarPorFecha () {
  const copia = [...juegos].sort((a, b) => a.ano - b.ano) // el [...juegos] es igual a const copia = juegos.slice()
  mostrarEntradas(copia)
}

// 10. Ordenar por ID
function ordenarPorId () {
  const copia = [...juegos].sort((a, b) => a.id - b.id)
  mostrarEntradas(copia)
}

function menu () {
  let opcion = ''

  while (opcion !== '0' && opcion !== null) {
    opcion = prompt(
      '1. Mostrar entradas\n' +
      '2. Añadir entrada\n' +
      '3. Buscar por título\n' +
      '4. Filtrar por categoría\n' +
      '5. Filtrar por estado\n' +
      '6. Modificar entrada\n' +
      '7. Eliminar entrada\n' +
      '8. Ordenar por valoración\n' +
      '9. Ordenar por fecha\n' +
      '10. Ordenar por ID\n' +
      '0. Salir'
    )

    switch (opcion) {
      case '1':
        mostrarEntradas()
        break

      case '2':
        anadirEntrada()
        break

      case '3':
        buscarPorTitulo()
        break

      case '4':
        filtrarPorCategoria()
        break

      case '5':
        filtrarPorEstado()
        break

      case '6':
        modificarEntrada()
        break

      case '7':
        eliminarEntrada()
        break

      case '8':
        ordenarPorValoracion()
        break

      case '9':
        ordenarPorFecha()
        break

      case '10':
        ordenarPorId()
        break

      case '0':

      case null:
        console.log('Saliendo...')
        break

      default:
        alert('Opción no válida')
    }
  }
}

menu()
