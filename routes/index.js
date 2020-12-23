const express = require('express')
const router = express.Router()
const petsCtrl = require('../controller/pets.controller')

router.post('/add', async (req, res) => {
    try {
        const { name, age, color } = req.body
        var regex = new RegExp("^([a-zA-Z])$");        
        if (name == '' || regex.test(name)) {
            return res.status(400).send("Please enter valid name")
        }
        if (age == '' || typeof age != 'number') {
            return res.status(400).send("Please enter valid age")
        }
        if (color == '' || regex.test(color)) {
            return res.status(400).send("Please enter valid colour")
        }
        await petsCtrl.savePets(name, age, color)
        res.status(200).send("Record Saved")
    } catch (error) {
        console.log("Error in saving pets", error);
        res.status(500).send("Something went wrong")
    }

})

router.get('/get', async (req, res) => {
    try {
        let result = await petsCtrl.getPets()
        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(200).send("No Data found")
        }

    } catch (error) {
        console.log('Error in getting pets', error)
        res.status(500).send("something went wrong")
    }
})

router.get('/delete', async (req, res) => {
    try {
        const { id } = req.query;
        await petsCtrl.deletePets(id)
        res.status(200).send({ "status": "done" })
    } catch (error) {
        console.log('Error in deleting pets', error)
        res.status(500).send("something went wrong")
    }
})

module.exports = router