const express = require('express')
const Animal = require('../models/animal')
const router = express.Router()


//---------------------------------
// Routes
//---------------------------------


router.get('/seed', (req, res) => {

})

router.get('/', (req, res) => {

    Animal.find({})
    .then((animals) => {
        res.render('animals/index.ejs', { animals })
    })
    .catch(err => console.log(err))

})

router.get('/new', (req, res) => {
    res.render('animals/new.ejs')
})

router.post('/', (req, res) => {
    
    req.body.extinct = req.body.extinct === 'on' ? true : false

    Animal.create(req.body, (err, createdAnimal) =>{
        console.log('created' , createdAnimal, err)
        res.redirect('/animals')
    })
} )

router.get('/:id/edit', (req, res) => {

    const id = req.params.id
    Animal.findById(id, (err, foundAnimal) => {
        res.render('animals/edit.ejs', { animal: foundAnimal })
    })
})

router.put('/:id', (req, res) => {
    
    req.body.extinct = req.body.extinct === 'on' ? true : false

    Animal.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedAnimal) => {
        console.log(updatedAnimal)

        res.redirect(`/animals/${req.params.id}`)
        
    })
})

router.get('/:id', (req, res)=>{

    Animal.findById(req.params.id)
    .then((animal)=> {
        res.render('animals/show.ejs', {animal})
    })
})

router.delete('/:id', async (req, res) => {


    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id)

    if(deletedAnimal){
        res.redirect('/animals/')
    }
})

module.exports = router