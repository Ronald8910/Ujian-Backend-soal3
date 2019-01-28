var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ronald1989',
    database: 'sekolahku'
})

db.connect(()=>{
    console.log('Database terhubung')
    
})
db.end(()=>{
    console.log('Database terputus')
    
})
