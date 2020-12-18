const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const guestSchema = new Schema({
    guest: {
        firstName:{ type:String},
        lastName: { type:String},
        email: { type:String},
        isAttending: { type: Boolean }
    }
})
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
    guests: { type: [guestSchema] }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;