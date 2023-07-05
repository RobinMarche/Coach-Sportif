const { Programme } = require('../models/Programme')
const { User } = require('../models/User')

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
    },

    async createMessage(req,res) {
        const { first_name, last_name, email, phone_number, message } = req.body

        if(!first_name || !last_name || !email || !phone_number || !message){
            return res.render('contacts-tailwind', { error : "Veuillez remplir tous les champs"})
        }

        await User.create({ first_name, last_name, email, phone_number, message })

        res.render('home-tailwind')
    }
    
}

module.exports = mainController