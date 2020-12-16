const router = require("express").Router();
const invoiceController = require("../../controller/invoiceController");

// Matches with "/api/events"
router.route("/")
  .get(invoiceController.findAll)
  .post(invoiceController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(invoiceController.findById)
  .put(invoiceController.update)
  .delete(invoiceController.remove);

module.exports = router;



// we need to trigger these routes on an event, Do ajax calls or Fetch(react prefered). 
// so fetching/ajax calls inside the server. Inside components in react, require the file we created with FETCH functions, and use it there. 
// Google books HW for reference . 
//