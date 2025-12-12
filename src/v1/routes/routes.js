const express = require("express");

const jugadoresController = require("../../controllers/jugadores_controller")

const torneoController = require("../../controllers/torneo_controller")

const router = express.Router();

const cache = require('apicache').middleware;



router.get("/members", memberController.getAllMembers);

router.post("/members", memberController.createNewMember);

router.get("/members/:memberId/records", memberController.getMemberRecords);



router.get("/", cache('1 minutes'), workoutController.getAllWorkouts);

router.get("/:id", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:id", workoutController.updateOneWorkout);

router.delete("/:id", workoutController.deleteOneWorkout);

module.exports = router;