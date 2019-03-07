const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const RatingSchema = new Schema({
    rating: String
    
})
const SongSchema = new Schema ({
    title: String,
    artist: String,
    year: Number,
    genre: String,
    rating: RatingSchema
})

const RadioStationSchema = new Schema({
    name: String,
    genre: String,
    songs: [SongSchema]
})



const SongModel = mongoose.model('Song', SongSchema)
const RadioStationModel = mongoose.model('Radio', RadioStationSchema)
const RatingModel= mongoose.model('Rating', RatingSchema)
module.exports = {
    Song: SongModel,
    RadioStation: RadioStationModel,
    Rating: RatingModel
   
}