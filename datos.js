let juegos = [
  { id: 1, titulo: "Grand Theft Auto: San Andreas", genero: "Accion", empresa: "Rockstar Games", ano: 2004 },
  { id: 2, titulo: "The Last of Us", genero: "Supervivencia", empresa: "Naughty Dog", ano: 2013 },
  { id: 3, titulo: "Silent Hill 2", genero: "Terror", empresa: "Konami", ano: 2001 },
  { id: 4, titulo: "Kingdom Hearts 3", genero: "RPG", empresa: "Square Enix", ano: 2019 }
];


// 1. Listar juegos
function listarJuegos(lista = juegos) {}


//2. Filtrar por genero
function filtrarPorGenero(genero) {
    return juegos.filter(juego => 
    juego.genero.toLowerCase().includes(genero.toLowerCase().trim())
  );
}


// 3. Filtrar por empresa
function filtrarPorEmpresa(empresa) {
    return juegos.filter(juego => 
    juego.empresa.toLowerCase().includes(empresa.toLowerCase().trim())
  );
}



//4. Ordenar alfacéticamente
function ordenarAlfabeticamente() {}


//5. Ordenar por año
function ordenarPorAno() {}


//6. Añadir juego
function anadirJuego(titulo, genero, empresa, ano) {

    return nuevoJuego;
}


//7. Editar juego
function editarJuego(id, nuevosDatos) {}


//8. Eliminar último juego registrado
function eliminarUltimoJuego() {

    return juegos.pop();
}