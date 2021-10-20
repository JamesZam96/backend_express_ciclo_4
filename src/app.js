const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')

//configuraciones
app.set('port',process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(cors())

//rutas
app.use('/auth', authRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})