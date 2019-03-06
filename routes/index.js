const express = require("express")
const router = express.Router()
const radioController = require("../controllers/radioController.js")


router.get('/')
router.get('/radios', radioController.index)
router.get('/radios/new', radioController.new)
router.post('/radios', radioController.create)
router.get('/radios/:radioId/edit', radioController.edit)
router.get('/radios/:radioId', radioController.show)
router.put('/radios/:radioId', radioController.update)
router.delete('/radios/:radioId', radioController.delete)



module.exports = router