const mongoose = require('./connection')
const {Song, RadioStation} = require('../models/radio.js/index.js')

const buttHash = new Song ({
    title: 'Butt Hash',
    artist: 'Casey Jones',
    year: 1999,
    genre: 'xStraight Edge Hardcorex'
})

const dontGoBreakinMyHeart = new Song ({
    title: 'Don\'t Go Breakin\' My Heart',
    artist: 'Elton John',
    year: 1968,
    genre: 'Pop'
})
const toRamona = new Song ({
    title: 'To Ramona',
    artist: 'Bob Dylan',
    year: 1964,
    genre: 'Folk'
})
const theGrandTour = new Song ({
    title: 'The Grand Tour',
    artist: 'George Jones',
    year: 1972,
    genre: 'Country'
})
const chelseaGirl = new Song ({
    title: 'Chelsea Girl',
    artist: 'Nico',
    year: 1970,
    genre: 'Sixties Pop'
})
const lookOnDownFromTheBridge = new Song ({
    title: 'Look On Down From The Bridge',
    artist: 'Mazzy Star',
    year: 1990,
    genre: 'Sleepy Pop'
})
const wildHorses = new Song ({
    title: 'Wild Horses',
    artist: 'The Rolling Stones',
    year: 1972,
    genre: 'Seventies Rock'
})
const goinHome = new Song ({
    title: 'Goin Home',
    artist: 'J Mascis',
    year: 2003,
    genre: 'Alternative Rock'
})
const northernSky = new Song ({
    title: 'Northern Sky',
    artist: 'Nick Drake',
    year: 1969,
    genre: 'Folk'
})
const imTryingToBeTheManYouNeed = new Song ({
    title: 'I\'m trying (To Be The Man You Need)',
    artist: 'Reigning Sound',
    year: 2014,
    genre: 'Alt-Rock'
})
const iKnowItsOver = new Song ({
    title: 'I Know It\'s over',
    artist: 'The Smiths',
    year: 1984,
    genre: 'Goth-Pop'
})
const famousBlueRaincoat = new Song ({
    title: 'Famous Blue Raincoat',
    artist: 'Leonard Cohen',
    year: 1969,
    genre: 'Folk'
})
const awake = new Song ({
    title: 'Awake',
    artist: 'Smoke',
    year: 1989,
    genre: 'Alt-Punk'
})
const flirtedWithYouAllMyLife = new Song ({
    title: 'Flirted With You All My Life',
    artist: 'Vic Chesnutt',
    year: 1991,
    genre: 'Folk-Punk'
})
const empty = new Song ({
    title: 'Empty',
    artist: 'The Cranberries',
    year: 1991,
    genre: 'Alt-Pop'
})
const thePianoHasBeenDrinking = new Song ({
    title: 'The Piano Has Been Drinking',
    artist: 'Tom Waits',
    year: 1983,
    genre: 'Alternative'
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
    .then(() => Station.create(wrtt))
    .then(() => RadioStation.create(wrek))
    .then(() => mongoose.connection.close())
    