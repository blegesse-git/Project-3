const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    eventDate: {
        type: String
    },
    eventBudget: {
        type: Number
    },
    eventEmail: {
        type: String
    },
    phoneNum: {
        type: Number
    }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;