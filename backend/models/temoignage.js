const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let temoignageSchema = new Schema({
    couple: { type: String },
    message: { type: String },
    imageCouple: { type: String }
}, {
    collection: 'temoignages'
});

module.exports = mongoose.model('Temoignage', temoignageSchema);