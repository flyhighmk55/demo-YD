//공통 스크립트 
//헤더 푸터 관련 스크립트. 모바일 버튼???

var bw = $('body').width();
$(window).resize(function(){
    bw = $('body').width();
}); 



// mob 메뉴 오픈

$('header .m_header .seeall').on('click', function(){
        $('header .layout').animate({'right':'0'},400);
        $('html').addClass('hidden');
        $('header .menu_out').css('z-index', 1);
});


$('header .menu_out').on('click', function(){
    if ( bw <= 800 ){
        $('header .layout').animate({'right':'-250px'},400);
        $('html').removeClass('hidden');
        $(this).css('z-index', -10);
    }
});



// 언어선택 토글 버튼

//pc
$('header #tnb .part2').click(function(){
    if ( bw > 800 ){
        $(this).children('.item').stop().slideToggle(300);
    }
});
$('header').on('mouseleave' ,function(){
    if ( bw > 800 ){
        $('header #tnb .part2 .item').stop().slideUp(300);
    }
});

//mob
$('header #tnb .part2 span').click(function(){
    if ( bw <= 800 ){
        $(this).next('.item').stop().slideToggle(300);
    }
});



// 검색 버튼 

$('header #gnb .go .search .open').click(function(){
    if ( bw > 800 ){
        $(this).next('.closed').stop().fadeToggle(100);
    } else {
        $(this).next('.closed').stop().slideToggle(300);
    }
});

$('header #gnb .go .search .closed a').click(function(){
    $(this).parent('.closed').stop().fadeToggle(100);
});



//gnb 서브 메뉴 타이틀
var gnb_menu_li_length = $('.menu li').length;

for (var i = 0; i <= gnb_menu_li_length; i++){
    var mt = $('.menu li').eq(i).find('a').text();
    var md = $('.menu li').eq(i).find('a').attr('data-desc');
    $('.sub_menu').eq(i).find('dt').text(mt);
    $('.sub_menu').eq(i).find('dd').text(md);
};




// gnb 메뉴5의 서브메뉴 아이콘

var gnb_sub_menu5_li_length = $('header #gnb .sub .wrap .sub_menu:nth-child(5) .item > li').length;
function gnb_sub_menu5 (){
    for (var i = 0; i <= gnb_sub_menu5_li_length; i++){
        var on = i*-57;
        $('header #gnb .sub .wrap .sub_menu:nth-child(5) .item > li').eq(i).find('em').css({'background-position': on + 'px 0'});
    };
}

gnb_sub_menu5();
$('header #gnb .sub .wrap .sub_menu:nth-child(5) .item > li').hover(
    function(){
        var i = $(this).index();
        $(this).find('em').css({'background-position': i*-57 + 'px -57px'});
    }, function(){
        gnb_sub_menu5();
    }
);

// gnb 서브 메뉴 보이기

$('header #gnb .menu li').on('mouseenter', function(){
    if (bw > 800){
        var i = $(this).index();
        $(".sub_menu").eq(i).addClass("view").siblings().removeClass("view"); // 각 서브메뉴들의 투명도는 addClass로 주고, 전체 서브메뉴의 높이는 각 서브메뉴의 높이를 구해서 전체 서브메뉴 높이에 적용.
        var smh = $(".sub_menu").eq(i).height();

        $(".sub").css("height",smh);
        $('section').addClass('dark');
        $('footer').addClass('dark');
    }
});


$('header #gnb .menu li').on('click', function(){
    if (bw <= 800){
        var i = $(this).index();
        $(".sub_menu").eq(i).addClass("view").siblings().removeClass("view"); // 각 서브메뉴들의 투명도는 addClass로 주고, 전체 서브메뉴의 높이는 각 서브메뉴의 높이를 구해서 전체 서브메뉴 높이에 적용.

        $(".sub_menu").slideDown(400);
    }
});

$('header #gnb').on('mouseleave', function(){
    $('header #gnb .sub').css('height', 0);
     $('header #gnb .sub .wrap .sub_menu').removeClass('view');
    $('section').removeClass('dark');
    $('footer').removeClass('dark');
});


//mob
$('header #gnb .sub_menu .item > li > a').on('click', function(){
    if (bw <= 800){
        $('.item-inner').stop().slideUp();
        $(this).next('.item-inner').stop().slideToggle(300);
        
    }
});



















// 푸터 > 배너 : 자동슬라이드

var fb_l = $('footer #footer-bnr .frame ul li').length;
var fb_w = $('footer #footer-bnr .frame ul li').width();
var n_fb = 0;
function fb_sliding (){
    n_fb++;
    //console.log(n_fb);
    if ( n_fb >= fb_l ){
        n_fb = 0;
        var fbi_w = $('footer #footer-bnr .frame ul li').eq(0).width();
        $('footer #footer-bnr .frame ul').animate({'left': -fbi_w-40},200, function(){
            $(this).find('li').eq(0).clearQueue().appendTo('footer #footer-bnr .frame ul');
            $(this).clearQueue().css('left', 0);
        });
    } else {
        var fbi_w = $('footer #footer-bnr .frame ul li').eq(0).width();
        $('footer #footer-bnr .frame ul').animate({'left': -fbi_w-40},200, function(){
            $(this).find('li').eq(0).clearQueue() .appendTo('footer #footer-bnr .frame ul');
            $(this).clearQueue().css('left', 0);
        });
    }
};


var fb_s_auto = setInterval('fb_sliding()',2000);





// 푸터 > 배너 재생버튼 - 클릭: 슬라이드 멈춤, 아이콘 변경


var i_fb = 0;
$('#footer-bnr .page .play').click(function(){
    if(i_fb == 0){
        clearInterval(fb_s_auto);
        $(this).addClass('xi-play').removeClass('xi-pause');
        i_fb = 1;
    } else {
        $(this).addClass('xi-pause').removeClass('xi-play');
        fb_s_auto = setInterval('fb_sliding()',2000);
        i_fb = 0;
    }
});





// 푸터 > 배너 이전||다음 버튼 - 클릭 : 슬라이드 이동




$('#footer-bnr .page .next').click(function(){
    clearInterval(fb_s_auto);
    fb_sliding();
    fb_s_auto = setInterval('fb_sliding()',2000);
});
$('#footer-bnr .page .prev').click(function(){
    n_fb--;
    //console.log(n_fb);
    clearInterval(fb_s_auto);
    $('#footer-bnr .frame ul li:last-child').prependTo('#footer-bnr .frame ul');
    var fbi_w = $('footer #footer-bnr .frame ul li').eq(0).width();
    $('#footer-bnr .frame ul').css({'left': -fbi_w-40}).animate({'left': 0},200);
    fb_s_auto = setInterval('fb_sliding()',2000);
});






















