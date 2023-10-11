//섹션 - 배경 컨텐츠 높이에 맞추기
var bgh = $('section .wrap').height();
$('.bg').css('height', bgh);




// 메인 > 날씨 - 호버: 정보창 활성화 
$('#index-main .weather > li:nth-child(1) div p a').hover(
    function(){
        $(this).next().show();
    }, function(){
        $(this).next().hide();
    }
);




// 메인 > 퀵메뉴 - 아이콘 배치

var quick_l = $('#index-main .quick li').length;
for(var i = 0; i <= quick_l; i++){
    var quick_i = $('#index-main .quick li').index();
    $('#index-main .quick li').eq(i).find('span').css('background-position', i*-65 + 'px 0');
};


// 메인 > 퀵메뉴 - 호버: 애니메이트
function q_move (){
$('#index-main .quick .on').find('span').animate({'top': '-6px'},300).animate({'top': '0px'},200,q_move);
};


$('#index-main .quick li').on('mouseover', function(){
    
    $(this).addClass('on').siblings().removeClass('on');
    q_move();
});
$('#index-main .quick li').on('mouseleave', function(){
    $('#index-main .quick li').stop().removeClass('on');
    $('#index-main .quick li a span').finish();

});

// 메인 > 오피스 - 아이콘 배치

var quick_l = $('#index-main .office > ul li').length;

for(var i = 0; i <= quick_l; i++){
    var quick_i = $('#index-main .office > ul li').index();
    
    $('#index-main .office > ul li').eq(i).find('span').css('background-position', i*-35 + 'px 6px');
};






// 메인 > 오피스 - 호버: 애니메이트
function o_move (){
$('#index-main .office .btn .on').find('span').animate({'top': '-6px'},300).animate({'top': '0px'},200,o_move);
};

$('#index-main .office .btn li').on('mouseover', function(){
    
    $(this).addClass('on').siblings().removeClass('on');
    o_move();
});
$('#index-main .office .btn li').on('mouseleave', function(){
    $('#index-main .office .btn li').stop().removeClass('on');
    $('#index-main .office .btn li a span').finish();

});





// 메인 > 배너 - 자동 슬라이드 + 페이지 넘버링
var mb_l = $('#index-main .banner ul li').length;

 $('#index-main .banner .btn .page .total').text(mb_l);

var n_mb = 0;

function mb_sliding (){
    n_mb++;
    if (n_mb >= mb_l ){
        $('#index-main .banner ul li').removeClass('on');
        $('#index-main .banner ul li').eq(n_mb-mb_l).addClass('on').delay(500);
        $('#index-main .banner .btn .page .now').text(1);
        n_mb = 0;
    } else {
        $('#index-main .banner ul li').removeClass('on');
        $('#index-main .banner ul li').eq(n_mb).addClass('on').delay(500);
        $('#index-main .banner .btn .page .now').text(n_mb+1);
    };
};

var mb_s_auto = setInterval('mb_sliding()', 3000);

// 메인 > 배너 - 호버:멈춤
$('#index-main .banner ul li').on('mouseover', function(){
    clearInterval(mb_s_auto);
});
$('#index-main .banner ul li').on('mouseout', function(){
    clearInterval(mb_s_auto);
    mb_s_auto = setInterval('mb_sliding()', 3000);
});



// 메인 > 배너 - 재생버튼: 멈춤||재생
var n2_mb = 0;
$('#index-main .banner .btn .play').click(function(){
    if ( n2_mb == 0 ){
        $(this).find('span').addClass('xi-play').removeClass('xi-pause');
        clearInterval(mb_s_auto);
        n2_mb = 1;
    } else {
        $(this).find('span').removeClass('xi-play').addClass('xi-pause');
        clearInterval(mb_s_auto);
        mb_s_auto = setInterval('mb_sliding()', 3000);
        n2_mb = 0;
    }
});



// 메인 > 배너 - 이전, 다음 버튼

$('#index-main .banner .btn .prev').click(function(){
    n_mb--;
    if (n_mb < 0 ){
        clearInterval(mb_s_auto);
        $('#index-main .banner ul li').removeClass('on');
        $('#index-main .banner ul li').eq(mb_l-1).addClass('on').delay(1000);
        $('#index-main .banner .btn .page .now').text(mb_l);
        n_mb = mb_l+n_mb;
        mb_s_auto = setInterval('mb_sliding()', 3000);
    } else {
        clearInterval(mb_s_auto);
        $('#index-main .banner ul li').removeClass('on');
        $('#index-main .banner ul li').eq(n_mb).addClass('on').delay(1000);
        $('#index-main .banner .btn .page .now').text(n_mb+1);
        mb_s_auto = setInterval('mb_sliding()', 3000);
    };
});

$('#index-main .banner .btn .next').click(function(){
    clearInterval(mb_s_auto);
    mb_sliding();
    mb_s_auto = setInterval('mb_sliding()', 3000);
});


nb1b_new();
// 뉴스 > box1 > board - 타이틀 클릭: 밑줄 show, 서브페이지 show, 연결 페이지 엥커 변경

$('#index-news > .box1 .board .title ul li').click(function(){
    var i = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(this).parents('.title').children('.more a').eq(i).addClass('on');
    $(this).parents('.board').find('.list ul').eq(i).addClass('on').siblings().removeClass('on');
});



// 뉴스 > box1 > board - 앵커 호버: 애니메이트


$('#index-news > .box1 .board .title .more a.on').hover(
    function(){
        $(this).addClass('hover');
    }, function(){
        $(this).removeClass('hover');
    }
);








// 뉴스 > box1 > board - 최신글에 뉴 붙이기
// 오늘 날짜 가져오기
var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month  + '-' + day;



function nb1b_new (){
    var l = $('#index-news > .box1 .board .list .on li').length;
    for ( var n = 0; n <= l; n++){
        var yyyy = $('#index-news > .box1 .board .list .on li').eq(n).find('.y').text();
        var mm = $('#index-news > .box1 .board .list .on li').eq(n).find('.m').text();
        var dd = $('#index-news > .box1 .board .list .on li').eq(n).find('.d').text();
        
        
        if ( yyyy >= year && mm >= month-1 && dd >= dd-1 ) {
            $('#index-news > .box1 .board .list .on li').eq(n).children('a').find('em').addClass('new');
        } else {
            $('#index-news > .box1 .board .list .on li').eq(n).children('a').find('em').removeClass('new');
        }
    
    };
    
};

nb1b_new();










// 뉴스 > box1 > popup > top 배너 - 자동 슬라이드 + 페이지 넘버링

var nb1p_l = $('#index-news > .box1 .popup .top ul li').length;

$('#index-news > .box1 .popup .top .title .page .total').text(nb1p_l);

var n_nb1p = 0;

function nb1p_sliding (){
    n_nb1p++;
    if ( n_nb1p > nb1p_l-2 ){
        $('#index-news > .box1 .popup .top ul li').removeClass('on');
        $('#index-news > .box1 .popup .top ul li').eq(n_nb1p).addClass('on').delay(500);
        $('#index-news > .box1 .popup .top .title .page .now').text(n_nb1p+1);
        n_nb1p = -1;
    } else {
        $('#index-news > .box1 .popup .top ul li').removeClass('on');
        $('#index-news > .box1 .popup .top ul li').eq(n_nb1p).addClass('on').delay(500);
        $('#index-news > .box1 .popup .top .title .page .now').text(n_nb1p+1);
    }
};


// 뉴스 > box1 > popup > top 배너 - 호버: 멈춤

var nb1p_s_auto = setInterval('nb1p_sliding()', 2000);


$('#index-news > .box1 .popup .top ul li').on('mouseover', function(){
    clearInterval(nb1p_s_auto);
});
$('#index-news > .box1 .popup .top ul li').on('mouseout', function(){
    clearInterval(nb1p_s_auto);
    nb1p_s_auto = setInterval('nb1p_sliding()', 2000);
});


// 뉴스 > box1 > popup > top 배너 - 재생버튼: 멈춤||재생
var i_nb1pb = 0;
$('#index-news > .box1 .popup .top .title .btn .play').on('click', function(){
    console.log(i_nb1pb);
    if (i_nb1pb == 0 ){
        $(this).removeClass('xi-pause').addClass('xi-play');
        clearInterval(nb1p_s_auto);
        i_nb1pb = 1;
    } else if (i_nb1pb == 1){
        $(this).removeClass('xi-play').addClass('xi-pause');
        clearInterval(nb1p_s_auto);
        nb1p_s_auto = setInterval('nb1p_sliding()', 2000);
        i_nb1pb = 0;
    };    
});



// 뉴스 > box1 > popup > top 배너 - 이전, 다음 버튼

$('#index-news > .box1 .popup .top .title .btn .next').click(function(){
    console.log(n_nb1p);
    nb1p_sliding();
});

$('#index-news > .box1 .popup .top .title .btn .prev').click(function(){
    n_nb1p--;
    console.log(n_nb1p);
    if (n_nb1p < 0 ){
        $('#index-news > .box1 .popup .top ul li').removeClass('on');
        $('#index-news > .box1 .popup .top ul li').eq(n_nb1p).addClass('on').delay(500);
        $('#index-news > .box1 .popup .top .title .page .now').text(nb1p_l);
        n_nb1p = nb1p_l+n_nb1p;
    } else {
        $('#index-news > .box1 .popup .top ul li').removeClass('on');
        $('#index-news > .box1 .popup .top ul li').eq(n_nb1p).addClass('on').delay(500);
        $('#index-news > .box1 .popup .top .title .page .now').text(n_nb1p+1);  
    }
});











// 뉴스 > box1 > popup > bottom 버튼 - 아이콘 호버: 애니메이트
function move_p (){
    $('#index-news > .box1 .popup .bottom .on').find('span').animate({'top': '-4px'},300).animate({'top': '2px'},200,move_p);
};


$('#index-news > .box1 .popup .bottom p').on('mouseover', function(){
    $(this).addClass('on').siblings().removeClass('on');
    move_p();
});

$('#index-news > .box1 .popup .bottom p').on('mouseleave', function(){
    $('#index-news > .box1 .popup .bottom p').stop().removeClass('on');
    $('#index-news > .box1 .popup .bottom p span').finish();
});












// 뉴스 > box1 > office - 앵커 호버: 애니메이트


$('#index-news > .box1 .office h4 a').hover(
    function(){
        $(this).addClass('hover');
    }, function(){
        $(this).removeClass('hover');
    }
);









// 뉴스 > box2(영동군 민원실 안내) - 아이콘 배치

var n_b2_l = $('#index-news > .box2 ul li').length;

for(var i = 0; i < n_b2_l; i++){
    $('#index-news > .box2 ul li').eq(i).find('span').css({'background-position': (i * -60) + 'px 0'});
};


// 뉴스 > box2(영동군 민원실 안내) - 아이콘 호버: 애니메이트


function move_n (){
    $('#index-news > .box2 ul .on').find('span').animate({'top': '-4px'},300).animate({'top': '2px'},200,move_n);
};


$('#index-news > .box2 ul li').on('mouseover', function(){
    $(this).addClass('on').siblings().removeClass('on');
    move_n();
});

$('#index-news > .box2 ul li').on('mouseleave', function(){
    $('#index-news > .box2 ul li').stop().removeClass('on');
    $('#index-news > .box2 ul li a span').finish();
});



















// 인포 - 자동슬라이드: 아이콘 변경, 버튼 배경색 변경, 서브페이지 변경 

$('#index-info .menu .title button').eq(1).addClass('on');

var imtb_l = $('#index-info .menu .title button').length;
var n_imtb = 0;
function info_sliding (){
    n_imtb++;
//console.log(n_imtb);
    if(n_imtb >= imtb_l){ //10
        n_imtb = 0;
        $('#index-info .menu .icon li').eq(n_imtb).css({'display': 'block'}).siblings().css({'display': 'none'});
        
        $('#index-info .menu .title button').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).addClass('on');
        $('#index-info .menu .title button').eq(n_imtb).next().addClass('on');
        
        $('#index-info .menu .title button span').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).find('span').addClass('on');
        $('#index-info .cont .s-group').eq(n_imtb).addClass('on').siblings().removeClass('on');
        
    } else {
        $('#index-info .menu .icon li').eq(n_imtb).css({'display': 'block'}).siblings().css({'display': 'none'});
        
        $('#index-info .menu .title button').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).addClass('on');
        $('#index-info .menu .title button').eq(n_imtb).next().addClass('on');
        
        $('#index-info .menu .title button span').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).find('span').addClass('on');
        
        $('#index-info .cont .s-group').eq(n_imtb).addClass('on').siblings().removeClass('on');
    };
};



// 인포 - 자동슬라이드: 호버시 멈춤
var info_s_auto = setInterval('info_sliding()', 3000);

$('#index-info .cont .s-group').on('mouseover', function(){
    clearInterval(info_s_auto);
});
    
$('#index-info .cont .s-group').on('mouseleave', function(){
    clearInterval(info_s_auto);
    info_s_auto = setInterval('info_sliding()', 3000);
});




// 인포 > 타이틀 > 재생버튼 - 클릭 : 멈춤 || 재생

var n_ipp = 0;
$('#index-info > .page .play').click(function(){
    console.log(n_ipp);
    if (n_ipp == 0 ){
        $(this).addClass('xi-play').removeClass('xi-pause');
        clearInterval(info_s_auto);
        n_ipp = 1;
    } else {
        $(this).addClass('xi-pause').removeClass('xi-play');
        clearInterval(info_s_auto);
        info_s_auto = setInterval('info_sliding()', 3000);
        n_ipp = 0;
    }
});



// 인포 > 타이틀 > 이전||다음 - 클릭: 아이콘 변경, 버튼 배경색 변경, 서브페이지 변경 



$('#index-info > .page .turn .next').click(function(){
    clearInterval(info_s_auto);
    info_sliding();
    info_s_auto = setInterval('info_sliding()', 3000);
});

$('#index-info > .page .turn .prev').click(function(){
    n_imtb--;

    if( n_imtb <= -1 ){  //-1
        n_imtb = 10;
//console.log(n_imtb);
        clearInterval(info_s_auto);
        $('#index-info .menu .icon li').eq(n_imtb).css({'display': 'block'}).siblings().css({'display': 'none'});
        
        $('#index-info .menu .title button').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).addClass('on');
        $('#index-info .menu .title button').eq(n_imtb).next().addClass('on');
        
        $('#index-info .menu .title button span').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).find('span').addClass('on');
        
        $('#index-info .cont .s-group').eq(n_imtb).addClass('on').siblings().removeClass('on');
        
        info_s_auto = setInterval('info_sliding()', 3000);
    } else {
//console.log(n_imtb);
        clearInterval(info_s_auto);
        $('#index-info .menu .icon li').eq(n_imtb).css({'display': 'block'}).siblings().css({'display': 'none'});
        
        $('#index-info .menu .title button').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).addClass('on');
        $('#index-info .menu .title button').eq(n_imtb).next().addClass('on');
        
        $('#index-info .menu .title button span').removeClass('on');
        $('#index-info .menu .title button').eq(n_imtb).find('span').addClass('on');
        
        $('#index-info .cont .s-group').eq(n_imtb).addClass('on').siblings().removeClass('on');
        
        info_s_auto = setInterval('info_sliding()', 3000);
    };
});






// 인포 > 타이틀 > 메뉴 - 클릭: 아이콘 변경, 버튼 배경색 변경, 서브페이지 변경 



$('#index-info .menu .title button').click(function(){
        var i = $(this).index();
        $('#index-info .menu .icon li').eq(i).css({'display': 'block'}).siblings().css({'display': 'none'});
        
        $('#index-info .menu .title button').removeClass('on');
        $(this).addClass('on');
        $(this).next().addClass('on');

        $('#index-info .menu .title button span').removeClass('on');
        $(this).find('span').addClass('on');
        
        $('#index-info .cont .s-group').eq(i).addClass('on').siblings().removeClass('on');
    
        n_imtb = i-1;
});











// 어사이드 > top버튼 - 클릭: 맨위로


$('aside .top').click(function(){
    $('html').animate({'scrollTop' : 0},500);
});
























