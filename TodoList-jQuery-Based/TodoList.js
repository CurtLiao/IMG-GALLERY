//Check of Specific Todos By Clicking
$("ul").on("click","li",function(){ 
	$(this).toggleClass("complete");
});
//因為如果用 $("li") 這樣只會對原本在網頁的元素有效，對新加入的無效，所以要指名 ul(因ul是原本網頁就有的元素) 中的元素都要有效，並且用 .on()

//remove todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	}) //parent() 找到span 的父元素
	event.stopPropagation();  //阻止 bubbling up 到更上層元素
});
//輸入新事件，用 event 判斷輸入哪個按鍵
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>" + todo + "</li>");   //新增事件到 ul,可以是文字，也可以是html
	}
});	
$(".fa-plus-square").click(function(){
	$("input[type = 'text']").fadeToggle(1000);
});