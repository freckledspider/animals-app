require("dotenv").config() 
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const { emitWarning } = require("process")
const PORT = process.env.PORT
const AnimalRouter = require("./controllers/animal")
const app = express()

//---------------------------------
// Middleware
//---------------------------------

app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.use("/animals", AnimalRouter)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))