const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Event-Plannerdb"
);

const eventSeed = [
    {
        eventName: "Ugly Sweater Party",
        firstName: "Jane",
        lastName: "Doe",
        eventDate: 12-25-2020,
        eventBudget: 500,
        eventEmail: "janedoe@gmail.com",
        phoneNum: 2142332323,

    },
    {
      eventName: "Winter Wedding",
      firstName: "Alissa",
      lastName: "Johnson",
      eventDate: 01-16-2020,
      eventBudget: 50000,
      eventEmail: "heyAlly@gmail.com",
      phoneNum: 2142334971,

  },  {
    eventName: "30th Extravaganza",
    firstName: "Karina ",
    lastName: "De la Rosa",
    eventDate: 02-09-2020,
    eventBudget: 10500,
    eventEmail: "Karirosa91@gmail.com",
    phoneNum: 5552332323,

},  {
  eventName: "Vampire Wedding",
  firstName: "Bella",
  lastName: "Cullen",
  eventDate: 12-21-2020,
  eventBudget: 3000,
  eventEmail: "bloodDonor01@gmail.com",
  phoneNum: 2142386132,

},  {
  eventName: "GOT Theme Wedding",
  firstName: "Danny",
  lastName: "Targ",
  eventDate: 04-26-2020,
  eventBudget: 15000,
  eventEmail: "motherofdragons@gmail.com",
  phoneNum: 2300184781,

},  {
  eventName: "DNA Results Reveal",
  firstName: "Jerry",
  lastName: "Springer",
  eventDate: 12-23-2020,
  eventBudget: 100,
  eventEmail: "notURdaddy@springer.tv.com",
  phoneNum: 9119119119,

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

  