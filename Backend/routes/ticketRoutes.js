const express = require('express')
const { createTicket, getTickets, getTicket, deletTicket, updateTicket } = require('../controllers/ticketControllers')
const protect = require('../middlewere/authMiddlewere')
const router = express.Router()



router.get("/", protect, getTickets)
router.post("/", protect, createTicket)
 
router.route("/:id")
    .get(protect, getTicket)
    .delete(protect, deletTicket)
    .put(protect, updateTicket)


module.exports = router