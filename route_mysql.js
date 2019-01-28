var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
router.use(bodyParser.json())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ronald1989',
    database: 'sekolahku'
})

db.connect(() => {
    console.log('Database terhubung')
})

router.get('/data', (req, res) => {
    var dbstart = 'select * from users'
    db.query(dbstart, (error, output) => {
        if (error) {
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

router.get('/data/:id', (req, res) => {
    var dbstart = 'select * from users where id =?'
    db.query(dbstart, req.params.id, (error, output) => {
        if (error) {
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

//Post Data Ke Database
router.post('/data', (req, res) => {
    var dbstart = 'insert into users set ?'
    var data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    db.query(dbstart, data, (error, output) => {
        if (error) {
            console.log(error)
        } else {
            console.log(output)
            res.send({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                status: 'Data Terkirim'
            })
        }
    })
})


module.exports = router