const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
        invoiceDate: { 
            type: String,
            required: true    
        },
        firstName: { 
            type: String,
            required: true
        },
        lastName: { 
            type: String,
            required: true
        },
        address1: { 
            type: String, 
            required: true
        },
        address2: {
            type: String
        },
        city: { 
            type: String, 
            required: true
        },
        state: { 
            type: String, 
            required: true
        },
        zip: { 
            type: String, 
            required: true
        },
        invoiceSummary: { 
            type: String, 
            required: true
        },
        amountDue: { 
            type: Number, 
            required: true
        }
    });

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;