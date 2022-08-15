const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  router.get('/', (req, res) => {
    Drone.find().then((drones) => {
      res.render('drones/list', { drones });
    });
  });
  
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(droneDetails)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((error) => console.log("Error creating new drone", error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(droneId, newDetails)
  .then(() => res.redirect("/drones"))
  .catch((error) => console.log("Error editing drone", error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then( () => {res.redirect("/drones")})
  .catch((error) => console.log("Error deleting drone", error))
});

module.exports = router;