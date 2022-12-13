/// Import

require("dotenv").config() // .env
const express = require ("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

// create express app
const app = express()

// establish mongo connection
mongoose.connect(process.env.DATABASE_URL)

// mongoose connection events
mongoose.connection
.on("open", () => console.log("connected to mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

// register middleware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

// Routes and Routers
app.get("/", (req, res) => {
   res.send("<h1> Server is working</h1>") 
})

//start the server (listener)

const PORT = process.env.PORT || 3000
app.listen(PORT), () => console.log(`listening on port`)

