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
var dbstart = 'select * from users'
db.query (dbstart, (error,output)=>{
    if (error){
        console.log(error)
    } else{
        console.log(output)
    }
})

db.end(()=>{
    console.log('Database Terputus')
})