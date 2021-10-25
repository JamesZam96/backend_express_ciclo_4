const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()

//configuraciones
app.set('port',process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to mongo'))
.catch(err => console.log(err))

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}))

//rutas
app.use('/auth', authRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})