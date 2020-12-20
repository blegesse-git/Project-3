const db = require("../models");
const sendEmail = require("../utils/send-email");
const CONFIG = require("../config");

module.exports = {
    findAll: function(req, res) {
        db.Invoice
          .find({})
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Invoice
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log("Hello Im here");
        console.log(req.body);
        let newInvoice = null;

        db.Invoice
          .create(req.body)
          .then(dbInvoice => {
            newInvoice = { ...dbInvoice };
            return db.Event.find({ _id: req.body.eventId });
          })
          .then((dbEvent) => {
            console.log(dbEvent);
            const { eventEmail } = dbEvent[0];

            sendEmail(
              eventEmail,
              CONFIG.sendgrid.templateId_invoice,
              {
                date: req.body.invoiceDate,
                name: `${req.body.firstName} ${req.body.lastName}`,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zip,
                summary: req.body.invoiceSummary,
                amountDue: req.body.amountDue,
              },
              '',
            );

            return res.json(newInvoice);
          })
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Invoice
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Invoice
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};