const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    date: { type: Date, required: true },
    budget: { type: Number, required: true },
    email: { type: String, required: true }, 
    guests: [guestSchema],
    toDo: [todoSchema],
    reminders: [reminderSchema],
    invoice: [invoiceSchema]
    
})
const todoSchema = new Schema({
    toDo: [{ type: String}]
})
const reminderSchema = new Schema({
    reminders: [{ type: String}]
})
const guestSchema = new Schema({
    guest: {
        firstName: String,
        lastName: String,
        email: String
    }
})
const invoiceSchema = new Schema({
    invoice: {
        firstName: String,
        lastName: String,
        Address1: String,
        Address2:  String,
        city: String,
        state: String,
        zip: String,
        invoiceSummary: String,
        amountDue: Number
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;