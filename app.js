const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./api/api')
const indexRouter = require('./api/index')

const PORT = 3000 || process.env.PORT

mongoose.connect('mongodb+srv://chicky371:bbzz371@mycluster-tq7oo.mongodb.net/dairy_db?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true},
(err) =>{
    if(err){
        throw err
    }

    console.log('MongoDB connected (Database: dairy_db)...')
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'pages')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', api)
app.use(indexRouter)

app.listen(PORT, () => {
    console.log('Application is running at port ' + PORT)
})