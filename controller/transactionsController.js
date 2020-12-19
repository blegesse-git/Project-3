const db = require("../models");

module.exports = {
    addTransaction: function(req, res) {
        return db.Event.findOneAndUpdate(
            {
                _id: req.params.eventId,
            },
            {
                $inc: {
                    eventBudget: req.body.amount > 0 ? req.body.amount : 0,
                },
                $push: {
                    transactions: {
                        ...req.body,
                    },
                },
            },
        ).then(() => db.Event.find(
            {
                _id: req.params.eventId,
            }
        )).then((dbEvent) => res.json(dbEvent));
    },
};
