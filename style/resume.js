  
$(document).ready(function() {      
	//$('body').niceScroll({cursoropacitymax:0.8,cursorwidth:8});
});


$(function(){
	$(".menu").bind('click', function(){
		var _this = this;
		
		$(".menu").css("color","#c7c5c5");
		$(_this).css("color","#a1a1a2");
		$(".about").css("display","none");
		$("#detail").animate({height:'100px',} ,"slow").delay(100).animate({height:'650px',} ,"slow");
		setTimeout(function(){
			$(window).scrollTop(200);
			if($(_this).is("#m1"))
				$("#a1").css("display","block");
			else if($(_this).is("#m2"))
				$("#a2").css("display","block");
			else if($(_this).is("#m3"))
				$("#a3").css("display","block");
			else
				$("#a4").css("display","block");
			$('main').niceScroll({cursoropacitymax:0.8,cursorwidth:8});
		},1200)
	});	
});