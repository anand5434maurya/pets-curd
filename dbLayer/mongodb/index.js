const { models } = require('../../models')

const { Pets } = models

exports.createPets = (obj) => {
    let pets = new Pets(obj)
    return pets.save()
}

exports.getPets = () => {
    return Pets.find().select('name age colour')
}

exports.deletePets = (id) => {
    return Pets.findByIdAndDelete(id)
}