const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController') 
const categoriesController = require('../app/controllers/categoriesController')

console.log(categoriesController)
 
router.get('/notes', notesController.list)
router.get('/notes/:id', notesController.show)
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.destroy)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id', categoriesController.show)

module.exports = router

    