const plant = require("../models/plant");
const Plant = require("../models/plant");

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body);
    await plant.save();
    return res.status(201).json({ plant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPlants = async (req, res) => {
  try {
    const plant = await Plant.find();
    return res.status(200).json({ plants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getPlantsById = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    if (plant) {
      return res.status(200).json({ plant });
    }
    return res
      .status(404)
      .send("Plant with the specified with ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePlant = async (req, res) => {
  try {
    const { id } = req.params;
    await Plant.findByIdAndUpdate(id, req.body, (err, plant) => {
      if (err) {
        res.send(err);
      }
      if (!plant) {
        res.send("Plant not found!");
      }
      return res.json(plant);
    });
  } catch (error) {
    // return res.status(500).send(error.message);
  }
};

const deletePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Plant.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Plant deleted");
    }
    throw new Error("Plant not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPlant,
  getAllPlants,
  getPlantsById,
  updatePlant,
  deletePlant,
};
