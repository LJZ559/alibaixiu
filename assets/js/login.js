$(function(){
    $(".btn-primary").on("click",function(){
        var emai=$("#email").val()
        var regemail=/\w+[@]\w+[.]\w+/
        if(!regemail.test(emai)){
            $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
            $(".alert-danger>span").text("邮箱输入不正确！")
        }else{

        }
        $.ajax({
          type:"post",
          url:"/login",
          data:$("form").serialize(),
          success(res){
            if(res.code==201){
                location.href="/admin"
            }
            else{
                $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                $(".alert-danger>span").text(res.des)
            }
            // console.log(res)
          }
        })
      })
})