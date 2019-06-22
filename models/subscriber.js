const mongoose = require('mongoose'); 
var subscriberSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true
    },
    subscribertoChannel:{
        type:String,
        required:true
    },
    subscribertoDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});
module.exports = mongoose.model('Subscriber',subscriberSchema);