const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
    {
        name:    { type: String },
        email:   { type:String, unique: true},
        password:{ type:String, select:false }
    },
    {
        timestamps: true,
        versionKey: false
    } 
)
module.exports = mongoose.model("users", UserScheme)