require("dotenv").config()
const mongoose = require("./connection")
const Animal = require("./animal")

mongoose.connection.on("open", () => {
    const startingAnimals = [
        { species: "Homo sapiens", 
        extinct: false, 
        location: "Worldwide",
        lifeExpectancy: 79 },
      ]

      Animal.deleteMany({}, (err, data) => {
        Animal.create(startingAnimals, (err, data) =>{

            console.log(data)
        })
      })
})