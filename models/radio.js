const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const SongSchema = new Schema ({
    title: String,
    artist: String,
    year: Number,
    genre: String
})

const RadioStationSchema = new Schema({
    name: String,
    genre: String,
    songs: [SongSchema]
})



const SongModel = mongoose.model('Song', SongSchema)
const RadioStationModel = mongoose.model('Radio', RadioStationSchema)

module.exports = {
    Song: SongModel,
    RadioStation: RadioStationModel
}