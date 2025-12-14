const torneoService = require("../services/torneo_service");

const getAllPartidos = (req, res) => {
    try {
        const torneo = torneoService.getAllPartidos();
        if (!torneo || torneo == null) {
            res.status(400).send({
                status: "ERROR",
                data: { error: "There's an unexpected error" }
            })
        };
        res.send({ status: "OK", data: torneo });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: { message: error?.message || error } }
        })
    }
}
const updateTorneo = (req, res) => {

    const { body } = req;

    if (!body || typeof body.nombre !== 'string') {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Debes introducir el campo 'nombre'." },
        });
        return;
    }
    
    try {
        const updatedName = torneoService.updateTorneo(body);

        res.status(200).send({ status: "OK", data: { nombre: updatedName } });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error.message || error }
        });
    }
};

const updateOnePartido = (req, res) => {
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
        const updatedPartido = torneoService.updateOnePartido(id, body);
        res.status(200).send({ status: "OK", data: updatedPartido });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } })
    }
}

module.exports = {
    getAllPartidos,
    updateOnePartido,
    updateTorneo
}