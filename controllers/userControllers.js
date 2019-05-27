var userModle=require("../modules/userModle.js")

module.exports={
    login(req,res){
        var data=req.body
        /*  console.log(data)
        console.log(typeof data) */
        userModle.login(data.email,(err,results)=>{
            /* console.log(results)
            console.log(typeof results) */
            if(err) return res.json({
                code:200,
                des:"查询失败"
            })
            else{
                console.log(results)
                if(results){
                    if(results.password==data.password){
                        res.json({
                            code:201,
                            des:"邮箱输入成功"
                        })
                    }else {
                        res.json({
                            code:200,
                            des:"密码输入错误"
                        })
                    }
                    
                }
                else{
                    res.json({
                        code:200,
                        des:"邮箱输入错误"
                    })
                }
            }
        })
    }
}