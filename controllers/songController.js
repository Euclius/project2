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
        res.render('songs/new', {radioId: req.params.radioId})
    },
    create: (req, res) => {
        RadioStation.findById(req.params.radioId).then((radio) => {
            Song.create(req.body).then(song => {
                radio.songs.push(song)
                radio.save()
                res.redirect(`/radios/${req.params.radioId}/songs`)
            }).catch(err => console.log(err))
        })
    },
    show: (req, res) => {
        // Song.findById(req.params.songId)
        // .then(song => {
        //     console.log(song)
        //     res.render('songs/show', { song , radioId: req.params.radioId})
        // })
        RadioStation.findById(req.params.radioId).populate("ratings")
        .then(radio => {
            const song = radio.songs.id(req.params.songId)
            console.log(song)
            res.render('songs/show', { song , radioId: req.params.radioId})
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
        RadioStation.findById(req.params.radioId).then((radio) => {
            const song = radio.songs.id(req.params.songId).remove()
            radio.save()
            res.redirect(`/radios/${req.params.radioId}/songs`)
        })
    }
}

module.exports = songController