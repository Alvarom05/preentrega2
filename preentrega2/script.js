//opciones disponibles para cada componente
const microprocesadores = ["Ryzen 5", "Ryzen 7"];
const memoriasRAM = ["8GB", "16GB"];
const motherboards = ["B450", "A520"];
const discosSSD = ["240GB", "480GB"];
const gabinetes = ["Gamer", "Común"];

const componentes = [];


microprocesadores.forEach((procesador) => {
    memoriasRAM.forEach((ram) => {
        motherboards.forEach((motherboard) => {
            discosSSD.forEach((disco) => {
                gabinetes.forEach((gabinete) => {
                    componentes.push({
                        microprocesador: procesador,
                        memoriaRAM: ram,
                        motherboard,
                        discoSSD: disco,
                        gabinete,
                    });
                });
            });
        });
    });
});

console.log("Componentes:", componentes);

// Buscar un componente específico
const buscarComponente = componentes.find((componente) => {
    return (
        componente.microprocesador === "Ryzen 7" &&
        componente.memoriaRAM === "16GB" &&
        componente.motherboard === "B450"
    );
});

console.log("Componente encontrado:", buscarComponente);

// Buscar componentes que cumplan ciertos criterios
const componentesFiltrados = componentes.filter((componente) => {
    return componente.gabinete === "Gamer";
});

console.log("Componentes de tipo Gamer:", componentesFiltrados);

// Obtener los precios de los componentes elegidos
const preciosElegidos = componentesElegidos.map((nombreElegido) => {
    const componente = componentes.find((c) => c.nombre === nombreElegido);
    return componente ? componente.precio : 0; // 0 si no se encuentra el componente
});

// Calcular el precio total
const precioTotal = preciosElegidos.reduce((total, precio) => total + precio, 0);

console.log("Componentes Elegidos:", componentesElegidos);
console.log("Precios de Componentes Elegidos:", preciosElegidos);
console.log("Precio Total:", precioTotal);
