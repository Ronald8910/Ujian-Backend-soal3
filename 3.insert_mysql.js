var mysql = require('mysql')

//user tergantung kita masuk ke mysql nya pake root / user
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ronald1989',
    database: 'sekolahku'
})

db.connect(()=>{
    console.log('Database terhubung')
    
})

// untuk menambahkan isi dari database \\
var dbstart = 'insert into users set?'
var data = {
    username: 'Ronald',
    email: 'ronald@ronald.com',
    password: '12345',

}
db.query (dbstart, data , (error,output)=>{
    if (error){
        console.log(error)
    } else{
        console.log(output)
    }
})


db.end(()=>{
    console.log('Database Terputus')
})