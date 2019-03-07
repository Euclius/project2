const { Song, RadioStation, Rating } = require('../models/radio')

const ratingsController = {
    index: (req, res) => {
        RadioStation.findById(req.params.radioId).then(radiostations => {
            const song = radiostations.songs.id(req.params.songId)
            console.log(song.title)
            console.log(song.rating)
            res.render('ratings/index', song)
        })
    }
}


















module.exports = ratingsController
