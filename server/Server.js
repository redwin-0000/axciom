const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 7000;

//middleware
// app.get("/",(res,req)=>{
    // res.Send("Hello, welcome to login page")
// })

app.use(cors())
app.use(express.json())

try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected...");
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})
