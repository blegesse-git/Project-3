const db = require("../models");

module.exports = {
    addToDo: function (req, res) {
        console.log(req.body)
        return db.Event.findOneAndUpdate(
            {
                _id: req.params.eventId,
            },
            {

                $push: {
                    toDoItems: {
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
