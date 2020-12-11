const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    budget: { type: Number, required: true },
    email: { type: String, required: true }, 
    toDo: { type: String},
    reminders: { type: String},
    guest: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true }
    },
    invoice: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        Address1: { type: String, required: true },
        Address2:  String,
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        invoiceSummary: String,
        amountDue: { type: Number, required: true }
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;