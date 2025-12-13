const jugadorService = require("../services/jugador_service");

const getAllJugadores = (req, res) => {
    try {
        const allJugadores = jugadorService.getAllJugadores();
        if (!allJugadores || allJugadores == null) {
            res.status(400).send({
                status: "ERROR",
                data: { error: "There's an unexpected error" }
            })
        };
        res.send({ status: "OK", data: allJugadores });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: { message: error?.message || error } }
        })
    }
}

const updateOneJugador = (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    if (!id) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter 'id' can not be empty" },

            });
    }

    try {
        const updatedJugador = jugadorService.updateOneJugador(id, body);
        res.status(200).send({ status: "OK", data: updatedJugador });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } })
    }
}

module.exports = {
    getAllJugadores,
    updateOneJugador
}