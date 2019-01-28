var express = require ('express')
var cors = require ('cors')
var route_mysql = require('./router/route_mysql')

var app = express()
app.use(route_mysql)
app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1>Test Express MySql</h1>')
})

app.listen (1000,()=>{
    console.log('Server Aktif di Port 1000')
})