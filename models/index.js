const { connect: _connect, set } = require('mongoose')
exports.connect = async () => {    
    let mongoURI = `mongodb://localhost:27017/pets`
    console.log('MongoUri:', mongoURI)
    try {
      await _connect(mongoURI, { useNewUrlParser: true })
      console.log('Connection established to mongodb server')
    } catch (err) {
      console.error('Error connecting to mongo db', err)
    }
  }
set('debug', true)
exports.models = {
    Pets : require('./Pets.model'),
}