const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const guestSchema = new Schema({
    guest: {
        firstName:{ type:String},
        lastName: { type:String},
        email: { type:String},
        isAttending: { type: Boolean }
    }
});

const transationSchema = new Schema({
    description: {
        type: String,
    },
    amount: {
        type: Number,
    },
});

const toDoItemSchema = new Schema({
    description: {
        type: String,
    },
    isDone: {
        type: Boolean,
    },
});
const venueSchema = new Schema({
    venueName: {
        type: String,
    },
    venuePhone: {
        type: Number,
    },
    venueWebsite: {
        type: String,
    },
    venueAddress: {
        type: String,
    },
    venueTime: {
        type: String,
    },
    
});
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
    },
    guests: {
        type: [guestSchema],
    },
    transactions: { 
        type: [transationSchema],
    },
    toDoItems: {
        type: [toDoItemSchema],
    },
    eventVenue: {
        type: [venueSchema]
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;