let express = require('express');
const astuceRoute = express.Router();

// astuce model
let astuce = require('../models/astuce');

// Get All astuces
astuceRoute.route('/').get((req, res, next) => {
    astuce.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
});

// Get single astuce
astuceRoute.route('/:id').get((req, res, next) => {
    astuce.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Add a new astuce
astuceRoute.route('/').post((req, res, next) => {
    astuce.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Update astuce
astuceRoute.route('/:id').put((req, res, next) => {
    astuce.findByIdAndUpdate(req.params.id, {
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

// Delete astuce
astuceRoute.route('/:id').delete((req, res, next) => {
    astuce.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = astuceRoute;