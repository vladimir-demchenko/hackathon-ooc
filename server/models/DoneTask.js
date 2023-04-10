const {Schema, model} = require('mongoose')

const DoneTask = new Schema({
    date: {type: Date},
    status: {type: String},
    description: {type: String},
    liable: {type: Object},
    object: {type: Object, required: true}
})

module.exports = model('DoneTask', DoneTask)
