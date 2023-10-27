const mongoose = require('mongoose');

const conectar = () => {
    mongoose.connect('mongodb+srv://freddy:Freque2024@cluster0.jry94f4.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {console.log('MONGODB conectado.')})
      .catch((error) => {console.log( `[error] - ${error}` )})
}

module.exports = conectar