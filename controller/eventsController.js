const db = require("../models");
const sendEmail = require('../utils/send-email.js');
const CONFIG = require('../config');

const TEMPLATE_ID = CONFIG.sendgrid.templateId_confirmation;

module.exports = {
  findAll: function(req, res) {
    db.Event
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Hello Im here");
    console.log(req.body);
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGuest: function(req, res) {
    const {
      params: { id },
      body,
    } = req;

    const name = body.name.split(' ');

    const guestInfo = {
      guest: {
        firstName: name[0],
        lastName: name.length > 1 ? name[1] : '',
        email: body.email,
        isAttending: false,
      },
    };

    db.Event.findOneAndUpdate({ _id: id },
      {
        $push: {
          guests: {...guestInfo},
        },
      },
      { new: true })
      .then((dbEvent) => {
        const guestFound = dbEvent.guests
          .find((guest) => guest.email === guestInfo.email);

        const data = {
          name: guestInfo.firstName,
          eventName: dbEvent.name,
          confirmationUrl: `${CONFIG.host}api/events/guests/${guestFound._id}/confirm`,
        };

        const subject = 'One event coming soon and you are invited!';

        sendEmail(guestInfo.email, TEMPLATE_ID, data, subject);
        return dbEvent;
      })
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.status(500).json(err));
  },
  confirmAttendance: function(req, res) {
    db.Event.update({ 'guests._id': req.params.id },
      {
        $set: {
          'guests.$.guest.isAttending': true,
        },
      })
      .then(dbEvent => res.status(200))
      .catch(err => res.status(500).json(err));
  },
};
