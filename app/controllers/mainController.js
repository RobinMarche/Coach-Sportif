const { Programme } = require('../models/Programme')

const mainController = {
    homePage(req,res) {
        res.render('home')
    },

    coachPage(req,res) {
        res.render('coach')
    },

    contactPage(req,res) {
        res.render('contacts')
    },

    async programsPage(req,res){

        const programs = await Programme.findAll()

        res.render('programs', { programs })
    },

    async programChosen(req,res) {
        try {
            const id = req.params.id;

            const programme = await Programme.findByPk(id)

            res.render('programChosen', { programme })
        } catch (error) {
            res.render(error)
        }
    }

    
}

module.exports = mainController