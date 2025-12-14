const Torneo = require("../database/torneo");

const getAllPartidos = (() => {
    try {
        const allPartidos = Torneo.getAllPartidos();
        return allPartidos;
    } catch (error) {
        throw error
    }
})

const updateTorneo = ((changes) => {
    try {
        const updatedTorneo = Torneo.updateTorneo(changes);
        return updatedTorneo;
    } catch (error) {
        throw error;
    }
})

const updateOnePartido = ((id, changes) => {
    try {
        const updatedPartido = Torneo.updateOnePartido(id, changes);
        return updatedPartido;
    } catch (error) {
        throw error;
    }
})

module.exports = {
    getAllPartidos,
    updateTorneo,
    updateOnePartido
}