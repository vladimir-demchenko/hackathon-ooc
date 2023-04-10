const {Schema, model} = require('mongoose')


const Object = new Schema({
    district: {type: String},
    zone: {type: String},
    address: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: String},
    area: {type: Number},
    owner: {type: String},
    user: {type: String},
})

module.exports = model('Object', Object)
