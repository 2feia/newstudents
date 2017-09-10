$(document).ready(function(){
	//切换校史校情
	$(".wrap_C .left_C").children().each(function(){
		$(this).click(function(){
			var x=$(".wrap_C .left_C").children().index(this);
			$(".hasborder").removeClass("hasborder");
			$(this).addClass("hasborder");
			$(".right_C.active").removeClass("active");
			$(".right_C").eq(x).addClass("active");
		})
	})
})