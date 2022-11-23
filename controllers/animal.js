const express = require("express")
const Animal = require("../models/animal")

const router = express.Router()


//---------------------------------
// Routes
//---------------------------------

router.get("/", (req, res) => {
    res.send("Server is working")
})

// router.get("/animals/seed", (req, res) => {
//     // define data we want to put in the database
// })


router.get("/animals", (req, res) => {
    Animal.find({})
    .then((animals) => {
        res.render("animals/index.ejs", {animals})
    })
    .catch(err => console.log(err))
})

// new route

router.get("/animals/new", (req, res) => {
    res.render("animals/new.ejs")
})

// create route

router.post("/animals", (req, res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false
    Animal.create(req.body, (err, animal) => {
        res.redirect("/animals")
    })
})


// edit route

router.get("/animals/:id/edit", (req, res) => {
    const id = req.params.id
    Animal.findById(id, (err, animal) => {
        res.render("animals/edit.ejs", {animal})
    })
})


//update route

router.put("/animals/:id", (req, res) => {
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true : false
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal) => {
        res.redirect("/animals")
    })
})


// show

router.get("/animals/:id", (req, res) => {
    Animal.findById(req.params.id)
    .then((animal) => {
        res.render("animals/show.ejs", {animal})
    })
})


router.delete("/animals/:id", (req, res) => {
    const id = req.params.id
    Animal.findByIdAndDelete(req.params.id, (err, animal) => {
        res.redirect("/animals")
    })
})


// export this router to use in other files

module.exports = router