const express = require('express')
const app = express()


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Wellcome to an awesome app call bread!')
})

app.listen(PORT,() => {console.log('noming at port',PORT)})


