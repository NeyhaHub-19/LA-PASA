const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resetPasstokenSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:"user",
        unique: true,
    },
    token:{
        type:String, required:true
    },
    createdAt:{type:Date, default:Date.now(), expires:604800}  // expires after 1 week 
})

module.exports = mongoose.model("resetPassToken", resetPasstokenSchema)