const express = require("express");

const jugadoresController = require("../../controllers/jugadores_controller");

const torneoController = require("../../controllers/torneo_controller");

const router = express.Router();

router.get("/torneo", torneoController.getAllPartidos);

router.patch("/torneo/partido/:id", torneoController.updateOnePartido);


router.get("/jugadores", jugadoresController.getAllJugadores);

router.patch("/jugadores/:id", jugadoresController.updateOneJugador);

module.exports = router;
