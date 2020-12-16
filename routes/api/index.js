const router = require("express").Router();
const eventRoutes = require("./events");
// const invoiceRoutes = require("./invoices")

// Event routes
router.use("/events", eventRoutes);
// router.use("/invoices", invoiceRoutes);

module.exports = router;