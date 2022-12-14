const mongoose = require("./connection")
const {Schema, model} = mongoose

const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animal = model("animal", animalSchema)

module.exports = Animal