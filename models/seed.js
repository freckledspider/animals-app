require("dotenv").config()
const mongoose = require("./connection")
const Animal = require("./animal")

mongoose.connection.on("open", () => {
    const startingAnimals = [
        { species: "Homo sapiens", 
        extinct: false, 
        location: "Worldwide",
        lifeExpectancy: 79 },

        { species: "Parastratiosphecomyia stratiosphecomyioides", 
        extinct: false, 
        location: "Thailand",
        lifeExpectancy: 0.12 },

        { species: "Pica pica", 
        extinct: false, 
        location: "Eurasia",
        lifeExpectancy: 4 },

        { species: "Aha ha", 
        extinct: false, 
        location: "Australia",
        lifeExpectancy: 0.03 },

        { species: "Vini vidivici", 
        extinct: true, 
        location: "Polynesia",
        lifeExpectancy: 10 },
      ]

      Animal.deleteMany({}, (err, data) => {
        Animal.create(startingAnimals, (err, data) =>{

            console.log(data)
        })
      })
})