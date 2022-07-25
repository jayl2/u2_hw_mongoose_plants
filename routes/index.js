const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => res.send("this is the root"));

router.get("/plants", controllers.getAllPlants);
router.post("/plants", controllers.createPlant);
router.get("/plants/:id", controllers.getPlantsById);
router.put("/plants/:id", controllers.updatePlant);
router.delete("/plants/:id", controllers.deletePlant);

module.exports = router;
