/**
 * Created by 萤火虫 on 2017/6/20.
 */
$(document).ready(function(){
    var hrefData = [
        {
            "name": "走进金海",
            "link": "https://www.baidu.com/"
        },
        {"name": "新闻中心","link":"https://www.baidu.com/"},
        {"name": "企业文化","link":"https://www.baidu.com/"},
        {"name": "项目展示","link":"https://www.baidu.com/"},
        {"name": "留言板","link":"https://www.baidu.com/"},
        {"name": "联系金海","link":"https://www.baidu.com/"},
        {"name": "联系我们","link":"https://www.baidu.com/"},
        {"name": " 集团简介","link":"https://www.baidu.com/"},
        {"name": "集团架构","link":"https://www.baidu.com/"},
        {"name": "发展历程","link":"https://www.baidu.com/"},
        {"name": "董事长致辞","link":"https://www.baidu.com/"},
        {"name": " 企业荣誉","link":"https://www.baidu.com/"},
        {"name": "金海微博","link":"https://www.baidu.com/"},
        {"name": "网站地图","link":"https://www.baidu.com/"},
        {"name": "法律声明","link":"https://www.baidu.com/"},
        {"name": "客户留言","link":"https://www.baidu.com/"}
    ];
    $.each(hrefData,function(i,v){
        $("[data-href="+ v.name+"]").attr({"href": v.link});
    })
});