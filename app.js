const express = require('express')
const morgan  = require('morgan')
const bodyParser = require('body-parser')

const app     = express()
const users   = require('./routers/users')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use(morgan('combined'))

//users
app.use('/api/users', users)
// app.get('/users', Users.getUsers)



app.listen(3000, () => console.log('Example app listening on port 3000!'))