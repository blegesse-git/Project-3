const db = require("../models");

module.exports = {
    addToDo: function (req, res) {
        console.log('THIS IS THE BODY', req.body)
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
    markAsDone: function(req, res) {
      db.Event.update({
        'toDoItems._id': req.params.toDoId,
      }, {
        $set: {
          'toDoItems.$.isDone': true,
        },
      })
      .then(dbEvent => res.json(dbEvent))
      .catch(err => {
          console.log(err);
          return res.status(500).json(err);
      });
    },
    
};
