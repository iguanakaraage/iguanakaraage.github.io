$(function () {

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100 ) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
			if(scrollTop != 0)
				$('.nav').stop().animate({'opacity':'0.2'},200);
				//スクロールが上でない場合は0.2の表示でうすくなる。
			else	
				$('.nav').stop().animate({'opacity':'1'},200);
				//スクロールが一番の場合は1（100%）の表示。
			});
 
		$('.nav').hover(
			function (e) {
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0){
					$('.nav').stop().animate({'opacity':'1'},200);
				//スクロールが上でなく、ナビゲーションにマウスが乗ると0.2の表示でうすくなる。
				}
			},
			function (e) {
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0){
					$('.nav').stop().animate({'opacity':'0.2'},200);
				//ナビゲーションからマウスが乗ると1（100%）の表示。
			}
		}
	);
});
