const router = require("express").Router();
const eventsController = require("../../controller/eventsController");
const transactionsController = require("../../controller/transactionsController");
const toDoController = require("../../controller/toDoController");
const venueController = require("../../controller/venueController");


// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router
  .route("/:id/guests")
  .put(eventsController.addGuest);

router
  .route("/guests/:id/confirmation")
  .get(eventsController.confirmAttendance);

router
  .route("/:eventId/transactions")
  .put(transactionsController.addTransaction);
router
  .route("/:eventId/todo")
  .put(toDoController.addToDo);
router
  .route("/:eventId/todo/:toDoId/done")
  .put(toDoController.markAsDone);
router
  .route("/:eventId/eventVenue")
  .put(venueController.addVenue);

module.exports = router;



// we need to trigger these routes on an event, Do ajax calls or Fetch(react prefered). 
// so fetching/ajax calls inside the server. Inside components in react, require the file we created with FETCH functions, and use it there. 
// Google books HW for reference . 
//