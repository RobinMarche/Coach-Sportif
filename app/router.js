const { Router } = require('express')
const router = Router()

const mainController = require('./controllers/mainController')

router.get('/', mainController.homePage)
router.get('/coach', mainController.coachPage)
router.get('/contacts', mainController.contactPage)
router.get('/programs', mainController.programsPage)
router.get('/programs/:id', mainController.programChosen)



module.exports = router
