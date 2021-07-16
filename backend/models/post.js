const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    des :{
        type:String,
        required:true
    },
    date :{
        type:date,
        default:Date.now
    }
});

module.exports = mongoose.model('Posts',PostSchema);