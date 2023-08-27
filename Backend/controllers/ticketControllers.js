const asyncHandler = require('express-async-handler')
const Ticket = require('../models/ticketModel')
const User = require('../models/useModel')

const getTickets = asyncHandler(async (req, res) => {

    const user = User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }
    const tickets = await Ticket.find({user : req.user.id})
    res.status(200)
    .json(tickets)
    
    if (!tickets) {
        res.status(401)
        throw new Error('tickets Not Found')
    }


}) 

const createTicket = asyncHandler(async (req, res) => {
    const { product, discription, status } = req.body

    if (!product || !discription) {
        res.status(400)
        throw new Error("FILL ALL DEATAILS")
    }
    const ticket = await Ticket.create( {
        product,
        discription,
        user: req.user.id,
        status: "NEW"
    })
    if (!ticket) {
        res.status(400)
        throw new Error("TICKET NOT Created")
    }

    res.json(ticket)

})

const getTicket = asyncHandler(async (req, res) => {
    const user = User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }
    const tickets = await Ticket.findById(req.params.id)
    res.status(200)
    .json(tickets)

    if (!tickets) {
        res.status(401)
        throw new Error('ticket Not Found')
    }

})

const deletTicket = asyncHandler(async (req, res) => {
    const user = User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    const chackTicket = await Ticket.findById(req.params.id)
    if (!chackTicket) {
        res.status(401)
        throw new Error('Ticket Not Found')
    }
    
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    res.status(200)
    .json(ticket)

    if (!ticket) {
        res.status(401)
        throw new Error('ticket Not deleted')
    }

})

const updateTicket = asyncHandler(async (req, res) => {
    const user = User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }
    const chackTicket = await Ticket.findById(req.params.id)
    if (!chackTicket) {
        res.status(401)
        throw new Error('Ticket Not Found')
    }
    
    const ticket = await Ticket.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.status(200)
    .json(ticket)

    if (!ticket) {
        res.status(401)
        throw new Error('ticket Not Update')
    }

    
})

module.exports = { createTicket, getTickets, getTicket , deletTicket ,updateTicket }