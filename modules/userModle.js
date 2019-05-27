var mysql=require("mysql")
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"baixiu"
})
connection.connect()
module.exports={
    login(data,calback){
        // console.log(data.email)
        // console.log(typeof data.email)//string
        // var email=data.email
        var sql="select * from users where email=?"
        connection.query(sql,[data],(err,results)=>{
            if(err) return calback(err)
            calback(null,results[0])
        })
    }
}