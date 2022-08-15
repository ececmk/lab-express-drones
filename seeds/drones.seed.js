// Iteration #1
const DRONE = require('../data/drone.json')
const Drone = require('../models/Drone.model')

require('../config/db.config')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Josh-800", propellers: 2, maxSpeed: 31 },
    { name: "Jaime v5", propellers: 4, maxSpeed: 32 },
    { name: "Lloyd-Ultra", propellers: 99, maxSpeed: 9000 },
    { name: "Ironhack M1 Lightyear", propellers: Infinity , maxSpeed: Infinity }
    
  ];

  mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(drones)
  })
  .then( (drones) => {
     console.log(`created ${drones.length} drones`);
     mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });