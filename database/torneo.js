const fs = require("fs");

const dir = "./database/database.json";

const DB = require("./database.json");

const getAllPartidos = () => {
    try {
        let torneo = DB.torneo;

        if (torneo === undefined) {
            throw {
                status: 404,
                message: `There's an error while trying to get the data`
            };
        }

        return torneo;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

const updateOnePartido = (id, changes) => {
    try {

        const indexForUpdate = DB.torneo.partidos.findIndex((partido) => partido.id === id)

        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find match with the id '${id}'`,
            }
        }

        const updatedPartido = {
            ...DB.torneo.partidos[indexForUpdate],
            ...changes
        }

        DB.torneo.partidos[indexForUpdate] = updatedPartido;

        guardaBBDD(DB);

        return updatedPartido;

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

const updateTorneo = (changes) => {
    try {

        if (!DB.torneo) {
            throw {
                status: 404,
                message: 'Torneo no encontrado.',
            }
        }

        DB.torneo.nombre = changes.nombre;

        guardaBBDD(DB);

        return DB.torneo.nombre;

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
    getAllPartidos,
    updateOnePartido,
    updateTorneo,
};