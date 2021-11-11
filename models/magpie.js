const mongoose = require("mongoose")
const magpie = mongoose.Schema({name: String,color: String,weight: Number})
module.exports = mongoose.model("magpie",magpie)