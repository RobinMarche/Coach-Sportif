const { Programme } = require('../models/Programme')

const mainController = {
    homePage(req,res) {
        res.render('home-tailwind')
    },

    coachPage(req,res) {
        res.render('coach-tailwind')
    },

    contactPage(req,res) {
        res.render('contacts-tailwind')
    },

    async programsPage(req,res){

        const programs = await Programme.findAll()

        res.render('programs-tailwind', { programs })
    },

    async programChosen(req,res) {
        try {
            const id = req.params.id;

            const programme = await Programme.findByPk(id)

            res.render('programChosen-tailwind', { programme })
        } catch (error) {
            res.render(error)
        }
    }

    
}

module.exports = mainController