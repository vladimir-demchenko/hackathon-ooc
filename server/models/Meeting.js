const {Schema, model} = require('mongoose')

const Meeting = new Schema({
    date: {type: Date},
    questions: {type: String},
    protocol: {type: String},
    participants: [{type: Object}],
    object: [{type: Object, required: true}]
})

module.exports = model('Meeting', Meeting);
