const {Song, RadioStation} =  require('../models/radio')



const songController = {
    index: (req, res) => {
        RadioStation.findById(req.params.radioId)
            .then(radio => {
                res.render('songs/index', { 
                    radio,
                    radioId: req.params.radioId,
                    songs: radio.songs
                })
            })
    },
    new: (req, res) => {
        res.render('songs/new')
    },
    create: (req, res) => {
        Song.create(req.body).then(songs => {
            res.redirect('/songs')
        })
    },
    show: (req, res) => {
        Song.findById(req.params.radioId).then(songs => {
            res.render('songs/show', { songs , radioId: req.params.radioId})
        })
    },
    edit: (req, res) => {
        Song.findById(req.params.radioId).then(songs => {
            res.render('songs/edit', { songs })
        })

    },
    update: (req, res) => {
        Song.findByIdAndUpdate(req.params.radioId, req.body, { new: true }).then(() => {
            res.redirect(`/${req.params}`)
        })
    },
    delete: (req, res) => {
        Song.findByIdAndDelete(req.params).then(() => {
            console.log(`Delete songs with the id of ${req.params}`)
            res.redirect('/')
        })
    }
}

module.exports = songController