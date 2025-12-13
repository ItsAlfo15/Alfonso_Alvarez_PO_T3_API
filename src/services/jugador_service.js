const Jugador = require("../database/jugador");

const getAllJugadores = (() => {
    try {
        const allJugadores =  Jugador.getAllJugadores();
        return allJugadores;
    } catch (error) {
        throw error
    }
})

const updateOneJugador = ((id, changes) => {
    try {
        const updatedJugador = Jugador.updateOneJugador(id, changes);
        return updatedJugador;
    } catch (error) {
        throw error;
    }
})

module.exports = {
    getAllJugadores,
    updateOneJugador
}