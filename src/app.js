const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()
const path = require('path')
const incomeRoutes = require('./routes/income.routes')
const outcomeRoutes = require('./routes/outcome.routes')

//configuraciones
app.set('port',process.env.PORT || 3000)
mongoose.connect(process.env.DB_STRING)
.then(db => console.log('Connected to mongo'))
.catch(err => console.log(err))
app.use('/documentation',express.static(path.join(__dirname,'../doc/')))

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:false}))

//rutas
app.use('/auth', authRoutes)
app.use('/incomes', incomeRoutes)
app.use('/outcomes', outcomeRoutes)

//inicio del servidor
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})