const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//syntax errors in Schemas starting from guest Schema  ****

//We may need to create seperate files for each schema OR google syntax for connecting db schemas using mongo. 
//Keep everything in one db 


const todoSchema = new Schema({
    toDo: [{ type: String}]
})
const reminderSchema = new Schema({
    reminders: [{ type: String}]
})

const guestSchema = new Schema({
    guest: {
        firstName:{ type:String},
        lastName: { type:String},
        email: { type:String},
        isAttending: { type: Boolean }
    }
});

const transactionSchema = new Schema({
    description:{type: String},
    amount: {type: String}
});

const budgetSchema = new Schema({
    budget: Number,
    currentBalance: Number, 
    expense: Number,
    transactions: [transactionSchema]
    
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
const eventInfoSchema = new Schema ({
    VenueName: String,
    VenuePhone: String,
    VenueAddress: String,
    Notes: String
})
const eventSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    date: { type: Date, required: true },
    email: { type: String, required: true }, 
    guests: [guestSchema],
    toDo: [todoSchema],
    reminders: [reminderSchema],
    invoice: [invoiceSchema],
    eventInfo: [eventInfoSchema],
    budget: [budgetSchema]
    
})



const Event = mongoose.model("Event", eventSchema);

module.exports = Event;