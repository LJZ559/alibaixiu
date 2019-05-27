$(function(){
    /* var routername=location.href
    console.log(routername) */
    var menu_posts=$("#menu-posts")
    var menu_settings=$("#menu-settings")
    var routername
    var index=location.href.indexOf("?")//没有问号，结果-1
    console.log(index)

    //如果有参数
    if(index!=-1){
        routername=location.href.substring(location.href.lastIndexOf("/")+1,index)
        // console.log(routername)
    }
    else{
        console.log(123)
        routername=location.href.substring(location.href.lastIndexOf("/")+1)
        console.log(routername)
    }

    //合理展开菜单
    if(routername=="posts"||routername=="post-add"||routername=="categories"){
        menu_posts.addClass("in")
        menu_posts.attr("aria-expanded","true")
        // menu_posts_a.removeClass("active")
    }else if(routername=="nav-menus"||routername=="slides"||routername=="settings"){
        menu_settings.addClass("in")
        menu_settings.attr("aria-expanded","true")
    }

    $("#"+routername).addClass("active")
})