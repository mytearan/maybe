const mongoose = require('mongoose');
//const Schema = mongoose.Schema;


const CarsSchema = mongoose.Schema({
    carModel: {
        type: String,
        required: true
    },
    carMaker:{
        type: String,
        required: true
    },
    carYear: {
        type: String,
        required: true
    },
    carTrim: {
        type: String,
        required: true
    },
    carAv: {
        type: String,
        default: yes
    }

})
module.exports = mongoose.model('Post', CarsSchema);