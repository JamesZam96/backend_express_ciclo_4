const express =  require('express')
const incomeController = require('../controllers/income.controller')
const router = express.Router()
const { check } = require('express-validator')

router.post('/', incomeController.add)
router.get('/', incomeController.list)
router.get('/:id', incomeController.find)

module.exports = router


