let express = require('express');
const temoignageRoute = express.Router();

// temoignage model
let temoignage = require('../models/temoignage');

// Get All temoignages
temoignageRoute.route('/').get((req, res, next) => {
    temoignage.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
});

// Get single temoignage
temoignageRoute.route('/:id').get((req, res, next) => {
    temoignage.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Add a new temoignage
temoignageRoute.route('/').post((req, res, next) => {
    temoignage.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Update temoignage
temoignageRoute.route('/:id').put((req, res, next) => {
    temoignage.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete temoignage
temoignageRoute.route('/:id').delete((req, res, next) => {
    temoignage.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = temoignageRoute;