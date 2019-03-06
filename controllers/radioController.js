const { RadioStation } = require('../models/radio.js');

const radioController = {
    index: (req, res) => {
        RadioStation.find()
            .then(radiostations => {
                res.render('radiostations/index', { radiostations })
            })
    },
    new: (req, res) => {
        res.render('radiostations/new')
    },
    create: (req, res) => {
        RadioStation.create(req.body).then(radiostations => {
            res.redirect('/radios')
        })
    },
    show: (req, res) => {
        RadioStation.findById(req.params.radioId).then(radiostations => {
            res.render('radiostations/show', { radiostations })
        })
    },
    edit: (req, res) => {
        RadioStation.findById(req.params.radioId).then(radiostations => {
            res.render('radiostations/edit', { radiostations })
        })

    },
    update: (req, res) => {
        RadioStation.findByIdAndUpdate(req.params.radioId, req.body, { new: true }).then(() => {
            res.redirect(`/radios/${req.params.radioId}`)
        })
    },
    delete: (req, res) => {
        RadioStation.findByIdAndDelete(req.params.radioId).then(() => {
            console.log(`Deleted radiostation with the id of ${req.params}`)
            res.redirect('/radios')
        })
    }
}

module.exports = radioController