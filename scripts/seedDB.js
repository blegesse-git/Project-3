const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Event-Plannerdb"
);

const eventSeed = [
    {
        eventName: "Christmas Party",
        firstName: "Jane",
        lastName: "Doe",
        eventDate: 12-25-2020,
        eventBudget: 500,
        eventEmail: "janedoe@gmail.com",
        phoneNum: 2142332323,

    }
]

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });