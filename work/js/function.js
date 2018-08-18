/*setTimeout(visTopCon,1000)
setTimeout(visNav,1500)
setTimeout(visSec,2000)
function visTopCon(){
	$(".topContainer").fadeIn(1000);
}
function visNav(){
	$(".nav").fadeIn(1000);
}
function visSec(){
	$(".section-content-fadein h1").fadeIn(1000);
	$(".section-content-fadein em").fadeIn(1000);
}*/
$(".nav").delay(500).fadeIn(500);
$(".section-content-fadein").delay(1000).fadeIn(500);
$(".fixunder").mouseover(function(){
	$(this).css("opacity","0.8");
});
$(".fixunder").mouseleave(function(){
	$(this).css("opacity","1");
});