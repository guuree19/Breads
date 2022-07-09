const express = require('express')
const app = express()
const methodOverride = require('method-override')



// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// DEPENDENCIES




app.get('/', (req, res) => {
    res.send('Wellcome to an awesome app call bread!')
})
const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)


// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

app.listen(PORT,() => {console.log('noming at port',PORT)})


