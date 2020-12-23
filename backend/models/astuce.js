const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let astuceSchema = new Schema({
    titre: { type: String },
    description: { type: String },
    image: { type: String }
}, {
    collection: 'astuces'
});

module.exports = mongoose.model('Astuce', astuceSchema);