const express = require("express")
const router = express.Router()
const radioController = require("../controllers/radioController.js")
const songController = require("../controllers/songController.js")
const ratingsController = require("../controllers/ratingsController.js")


// router.get('/')
router.get('/radios', radioController.index)
router.get('/radios/new', radioController.new)
router.post('/radios', radioController.create)
router.get('/radios/:radioId/edit', radioController.edit)
router.get('/radios/:radioId', radioController.show)
router.put('/radios/:radioId', radioController.update)
router.delete('/radios/:radioId', radioController.delete)

//song routes
// router.get('/')
router.get('/radios/:radioId/songs', songController.index)
router.get('/radios/:radioId/songs/new', songController.new)
router.get('/radios/:radioId/songs/:songId', songController.show)
router.post('/radios/:radioId/songs', songController.create)
router.get('/radios/:radioId/songs/:songId/edit', songController.edit)
router.put('/radios/:radioId/songs', songController.update)
router.delete('/radios/:radioId/songs/:songId', songController.delete)

//ratings routes
router.get('/radios/:radioId/songs/:songId/ratings', ratingsController.index)
router.get('/radios/:radioId/songs/:songId/ratings/new', ratingsController.new)
router.get('/radios/:radioId/songs/:songId/ratings/:ratingId', ratingsController.show)
router.post('/radios/:radioId/songs/:songId/ratings', ratingsController.create)
router.delete('/radios/:radioId/songs/:songId/ratings/:ratingId', ratingsController.delete)









module.exports = router