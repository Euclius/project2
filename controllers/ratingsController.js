const { Songs, RadioStation, Ratings } = require('../models/radio')

const ratingsController = {
    index: (req, res) => {
        RadioStation.findById(req.params.radioId).then(radiostations => {
            const song = radiostations.songs.id(req.params.songId)
            console.log(song.title)
            console.log(song.rating)
            res.render('ratings/index', song)
        })
    },
    new: (req, res) => {
        res.render('ratings/new')
    },
    show: (req, res) => {
        Ratings.findById(req.params.ratingsId)
            .then(radio => {
                const song = radio.songs.ratings.id(req.params.ratingsId)
                console.log(ratings)
                res.render('songs/ratings/show', { song, radioId: req.params.ratingsId })
            })
    },
    create: (req, res) => {
        Ratings.create(req.body).then(ratings => {
            res.redirect('/radiostations/songs/ratings')
        })
    },

    delete: (req, res) => {
        Ratings.findByIdAndDelete(req.params.ratingId).then(() => {
            console.log(`Delete ratings with the id of ${req.params}`)
            res.redirect('/radiostations')
        })
    }
}





















module.exports = ratingsController
