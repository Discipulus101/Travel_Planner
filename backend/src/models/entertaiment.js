const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Attachment = require("./misc/attachment.js")
const Cost = require("./misc/cost.js")

/*
Основные данные по развлечениям: тип, компания, где, когда(начало/конец).
*/
const entertaimentCardSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    travelers: [String], //same as traveler.id type
    payer: {
        type: String, // traveler.id who payed
    },
    cost: Cost,
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    company: {
        type: String,
    },
    place: {
        type: String,
    },
    beginDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    comment: {
        type: String,
    },
    attachments: [Attachment],

});

module.exports = mongoose.model("entertaimentCard", entertaimentCardSchema);