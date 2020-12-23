const mongodb = require('./mongodb')

async function savePets(obj){
   return await mongodb.createPets(obj)
}

async function getPets(obj){
   return await mongodb.getPets(obj)
}

async function deletePets(id){
    return await mongodb.deletePets(id)
}

module.exports = {savePets,getPets,deletePets}