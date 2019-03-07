const { Songs, RadioStation, Rating } = require('../models/radio')

const ratingsController = {
    index: (req, res) => {
        // RadioStation.findById(req.params.radioId).then(radiostations => {
        //     const song = radiostations.songs.id(req.params.songId)
        //     console.log(song.title)
        //     console.log(song.rating)
        //     res.render('ratings/index', song)
        // })
        Rating.find()
            .then((rating) => {
                console.log(rating)
                res.render('ratings/index', { rating, radioId: req.params.radioId, songId: req.params.songId })
            })
    },
    new: (req, res) => {
        res.render('ratings/new', { radioId: req.params.radioId, songId: req.params.songId })
    },
    show: (req, res) => {
        Rating.findById(req.params.ratingId)
            .then(rating => {
                console.log(rating)
                // const song = radio.songs.ratings.id(req.params.ratingsId)
                res.render('ratings/show', { rating, radioId: req.params.radioId, songId: req.params.songId })
            })
    },
    create: (req, res) => {
        console.log('req.body', req.body)
        Rating.create(req.body).then(rating => {
            res.redirect(`/radios/${req.params.radioId}/songs/${req.params.songId}/ratings`)
        })
    },

    delete: (req, res) => {
        Rating.findByIdAndDelete(req.params.ratingId).then(() => {
            console.log(`Delete ratings with the id of ${req.params}`)
            res.redirect(`/radios/${req.params.radioId}/songs/${req.params.songId}/ratings`)
        })
    }
}





















module.exports = ratingsController
