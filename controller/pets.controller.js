const dbLayer = require('../dbLayer')
async function savePets(name, age, color) {
    let petObj = {
        name: name,
        age: age,
        colour: color
    }
    return await dbLayer.savePets(petObj)
}

async function getPets() {
    return await dbLayer.getPets()
    // console.log('result');
    // console.log(result)
}

async function deletePets(id) {

    return await dbLayer.deletePets(id)
    
}
module.exports = { savePets,getPets,deletePets }