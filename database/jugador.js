const fs = require("fs");

const dir = "./database/database.json";

const DB = require("./database.json");

const getAllJugadores = () => {
    try {
        let jugadores = DB.jugadores;

        if (jugadores === undefined) {
            throw {
                status: 404,
                message: `There's an error while trying to get the data`
            };
        }

        return jugadores;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

const updateOneJugador = (id, changes) => {
    try {

        const indexForUpdate = DB.jugadores.findIndex((jugador) => jugador.id === id)

        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find player with the id '${id}'`,
            }
        }

        const updatedJugador = {
            ...DB.jugadores[indexForUpdate],
            ...changes
        }

        DB.jugadores[indexForUpdate] = updatedJugador;

        guardaBBDD(DB);

        return updatedJugador;

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

function guardaBBDD(DB) {
    fs.writeFileSync(dir, JSON.stringify(DB, null, 2), {
        encoding: "utf8",
    })
}

module.exports = {
    getAllJugadores,
    updateOneJugador
};