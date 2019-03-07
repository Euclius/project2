const mongoose = require('./connection')
const {Song, RadioStation, Rating} = require('../models/radio.js')

const goodRating = new Rating ({
    rating: 'good'
})

const okRating = new Rating ({
    rating: 'ok'
})

const badRating = new Rating ({
    rating: 'bad'
})
const buttHash = new Song ({
    title: 'Butt Hash',
    artist: 'Casey Jones',
    year: 1999,
    genre: 'xStraight Edge Hardcorex',
    rating: badRating
    
})

const dontGoBreakinMyHeart = new Song ({
    title: 'Don\'t Go Breakin\' My Heart',
    artist: 'Elton John',
    year: 1968,
    genre: 'Pop',
    rating: okRating
})
const toRamona = new Song ({
    title: 'To Ramona',
    artist: 'Bob Dylan',
    year: 1964,
    genre: 'Folk',
    rating: goodRating
})
const theGrandTour = new Song ({
    title: 'The Grand Tour',
    artist: 'George Jones',
    year: 1972,
    genre: 'Country',
    rating: okRating
})
const chelseaGirl = new Song ({
    title: 'Chelsea Girl',
    artist: 'Nico',
    year: 1970,
    genre: 'Sixties Pop',
    rating: goodRating
})
const lookOnDownFromTheBridge = new Song ({
    title: 'Look On Down From The Bridge',
    artist: 'Mazzy Star',
    year: 1990,
    genre: 'Sleepy Pop',
    rating: goodRating
})
const wildHorses = new Song ({
    title: 'Wild Horses',
    artist: 'The Rolling Stones',
    year: 1972,
    genre: 'Seventies Rock',
    rating: okRating
})
const goinHome = new Song ({
    title: 'Goin Home',
    artist: 'J Mascis',
    year: 2003,
    genre: 'Alternative Rock',
    rating: okRating
})
const northernSky = new Song ({
    title: 'Northern Sky',
    artist: 'Nick Drake',
    year: 1969,
    genre: 'Folk',
    rating: goodRating
})
const imTryingToBeTheManYouNeed = new Song ({
    title: 'I\'m trying (To Be The Man You Need)',
    artist: 'Reigning Sound',
    year: 2014,
    genre: 'Alt-Rock',
    rating: badRating
})
const iKnowItsOver = new Song ({
    title: 'I Know It\'s over',
    artist: 'The Smiths',
    year: 1984,
    genre: 'Goth-Pop',
    rating: goodRating
})
const famousBlueRaincoat = new Song ({
    title: 'Famous Blue Raincoat',
    artist: 'Leonard Cohen',
    year: 1969,
    genre: 'Folk',
    rating: goodRating
})
const awake = new Song ({
    title: 'Awake',
    artist: 'Smoke',
    year: 1989,
    genre: 'Alt-Punk',
    rating: goodRating
})
const flirtedWithYouAllMyLife = new Song ({
    title: 'Flirted With You All My Life',
    artist: 'Vic Chesnutt',
    year: 1991,
    genre: 'Folk-Punk',
    rating: goodRating
})
const empty = new Song ({
    title: 'Empty',
    artist: 'The Cranberries',
    year: 1991,
    genre: 'Alt-Pop',
    rating: okRating
})
const thePianoHasBeenDrinking = new Song ({
    title: 'The Piano Has Been Drinking',
    artist: 'Tom Waits',
    year: 1983,
    genre: 'Alternative',
    rating: goodRating
})

const wras = new RadioStation ({
    name: 'WRAS 88.5',
    genre: 'Punk',
    songs: [buttHash, dontGoBreakinMyHeart, goinHome, iKnowItsOver]
})
const wrek = new RadioStation ({
    name: 'WREK 91.1',
    genre: 'Various',
    songs: [empty, chelseaGirl, lookOnDownFromTheBridge, northernSky]
})
const wkrp = new RadioStation ({
    name: 'WKRP 91.1',
    genre: 'Seventies Country',
    songs: [thePianoHasBeenDrinking,  theGrandTour, awake, famousBlueRaincoat]
})
const wrtt = new RadioStation ({
    name: 'WRTT 97.3',
    genre: 'Americana',
    songs: [toRamona, wildHorses, flirtedWithYouAllMyLife, imTryingToBeTheManYouNeed]
})



RadioStation.deleteMany({})
    .then(() => RadioStation.create(wkrp))
    .then(() => console.log('wkrp has been seeded'))
    .then(() => RadioStation.create(wras))
    .then(() => RadioStation.create(wrtt))
    .then(() => RadioStation.create(wrek))
    .then(() => Song.create([buttHash, dontGoBreakinMyHeart, toRamona, theGrandTour, chelseaGirl, lookOnDownFromTheBridge, wildHorses, goinHome, northernSky, imTryingToBeTheManYouNeed, iKnowItsOver, famousBlueRaincoat, awake, flirtedWithYouAllMyLife, empty]))
    .then(() => Rating.create(goodRating, okRating, badRating))
    .then(() => mongoose.connection.close())
    