const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    product: {
        type: String,
        required: true,
        enam: ["Pizza", "Sandwich", "Schezwan Margherita", "Mazedar Makhni Paneer", "Awesome American Cheesy", "Mexican Fiesta", "Sizzling Schezwan Chicken", "Mazedar Makhni Paneer", "Awesome American Cheesy", "Mexican Fiesta", "Sizzling Schezwan Chicken",]
    },
    discription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enam: ["NEW", "OPEN", "CLOSED"]
    },
}, { timestamps: true })

module.exports = mongoose.model("Ticket", ticketSchema)