const {Schema, model} = require('mongoose')

const Group = new Schema({
    liable: {type: Object},
    participants: {type: Object}
})

module.exports = model('Group', Group)
