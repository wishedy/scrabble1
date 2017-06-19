/* 
* @Author: guodi
* @Date:   2015-10-18 20:44:31
* @Last Modified by:   guodi
* @Last Modified time: 2015-10-18 20:44:40
*/

$(".sider li a").click(function(){
	t = $(this).parent("li")
	if (t.hasClass("open")){
		t.removeClass('open')
		t.height(40)
	}else{
		if ($(this).attr('href')=="#" || !$(this).attr('href')){
			location.href=$(this).next("ul").find('a:first').attr("href")
		
		}
		expend(t)
	}
})
function expend(item){
	item.siblings().height(40).removeClass('open')
	item.addClass('open')
	children = item.find("li")
	if (children.length >0){
		item.height((children.length+1)*40)
	}
}
function initSider(){
	$(".sider").children("li").each(function(){
		li = $(this).clone()
		ul = $(this).find("ul")
		li.removeAttr('style')
		li.removeAttr('class')
		li.find("i").remove()
		if (ul.length){
			if (li.children('a').attr("href") == "" ||li.children('a').attr("href") == "#"){
				li.addClass('disabled')
			}
			$("#sm-menu").append(li)
			$(ul).prev('a').append("<i class='fa fa-chevron-right'></i>")
			if ($(this).hasClass('open')){
				expend($(this))
			}
			$(ul).find("li").each(function() {
				$("#sm-menu").append("<li><a href='"+$(this).find("a").attr("href")+"'>　－　"+$(this).text()+"</a></li>")
			});
			li.find("ul").remove()		
		}else{

			$("#sm-menu").append(li)
		}

	})


}
initSider()

