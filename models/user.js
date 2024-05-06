const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, "Please enter your name"]
        },
        username: {
            type: String,
            required: [true, "Please enter a user name"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        }    
}
    ,{
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User