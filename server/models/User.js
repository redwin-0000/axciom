const mongoose = require("mongoose")
const { isEmail } = require("validator")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name."]
    },
    email: {
        type: String,
        required: [true, "Please Enter email."],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please Enter a valid Email."]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        minLength:[6, "Minimum 6 Length of Password"],

    }
})

const User = mongoose.model("user", userSchema)

module.exports = User;