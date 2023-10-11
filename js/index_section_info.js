
/* 네이밍 규칙 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


//.name : element name ( 단독 스타일, 태그 구분을 위해 사용 ; 구분되는 소그룹 안에서 단독으로 사용 )
//.s-name : style name ( 같은 스타일 2개 이상의 요소에 적용해야 할 때 사용 ; 전체 그룹 안에서 한가지 스타일에 대해 사용)
//.a-name : animate name ( 애니메이션 작용점에 사용 ; 동일 이름 사용 불가능 )
//e-name : effect name ( 애니메이션에 필요한 효과를 담은 스타일 또는 가상의 스타일명에 적용 ; 동일 이름 사용 가능 )
//function은 a-name과 e-name을 조합하여 만듦








/* 전체 효과 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* 그룹 내 전체에 적용되는 애니메이션 (a- : 애니메이션명으로 대상 정의)-----------------------------------------------------*/


//[animation] .a-link1 - 전체 호버 : 플러스 회전

$('.a-link1').hover(
    function(){
        $('.a-link1').removeClass('e-hover');
        $(this).addClass('e-hover');
    }, function(){
        $(this).removeClass('e-hover');
        $(this).find('.xi-close').finish();
    }
);




//[animation] .a-link2 - 호버 : 화살표 흔들

function link2_shake (){
    $('.e-shake').animate({'margin-left': 8},300).animate({'margin-left': 3},300,link2_shake);
}


$('.a-link2').hover(
    function(){
        $(this).find('i').addClass('e-shake');
        link2_shake();
    }, function(){
        $(this).find('i').removeClass('e-shake');
        $(this).find('i').finish();
    }
);




//[animation] .a-ir1 - 호버 : 아이콘 점프

function ir1_jump (){
    $('.e-jump span').animate({'top': -6},300).animate({'top': 0},200,ir1_jump)
};




$('.a-ir1').hover(
    function(){
        $(this).addClass('e-jump').siblings().removeClass('e-jump');
        ir1_jump();
    }, function(){
        $(this).removeClass('e-jump');
        $(this).find('span').finish();
    }
);


$('.a-ir2').hover(
    function(){
        $(this).addClass('e-jump').siblings().removeClass('e-jump');
        ir1_jump();
    }, function(){
        $(this).removeClass('e-jump');
        $(this).find('span').finish();
    }
);














/* 같은 스타일그룹별로 적용되는 스타일 (# + s- : 그룹명+스타일명으로 대상 정의)-----------------------------------------------------*/




//[style] #index-info .cont .s-group > .s-main - 배경 이미지 배치

var cg_l = $('#index-info .s-group').length;
for(var n = 0; n <= cg_l; n++){
    $('#index-info .s-group').eq(n).find('.s-main').css({'background-image': 'url(img/index/section/info/g' + (n+1) + '_mbg.png)'});
};
















/* 특정 효과 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




/* 특정 요소에만 적용되는 애니메이션 & 스타일 (엘리멘트명으로 대상 정의)-------------------------------*/




//[style] .group1 > box4 - 아이콘 배치

var g1b4_l = $('#index-info .cont .group1 .box4 ul li').length;
for (var n = 0; n <= g1b4_l; n++){
    $('#index-info .cont .group1 .box4 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px -480px'});
};






//[style] .group2 > box1 - 아이콘 배치

var g1b4_l = $('#index-info .cont .group2 > .box1 .frame ul li').length;
for (var n = 0; n <= g1b4_l; n++){
    $('#index-info .cont .group2 > .box1 .frame ul li').eq(n).find('span').css({'background-position': -n*48 + 'px 0'});
}



//[animation] .group2 > box1 - 아이콘 호버 : 아이콘/배경 변경

$('#index-info .cont .group2 > .box1 .frame ul li').hover(
    function(){
        var n = $(this).index();
        $(this).addClass('e-trans').siblings().removeClass('e-trans');
        $(this).find('span').css({'background-position': -n*48 + 'px ' + 47 + 'px'});
    }, function(){
        var n = $(this).index();
        $(this).removeClass('e-trans');
        $(this).find('span').css({'background-position': -n*48 + 'px 0'});
    }
);



//[animation] .group2 > box2 > slide - 슬라이드

$('#index-info .cont .group2 > .box2 .slide .next').click(function(){
    $(this).parent().find('.frame ul li:last-child').prependTo('.slide .frame ul');
    $(this).parent().find('.frame ul').animate({'left':-112},0, function(){
        $(this).animate({'left':0},300)
    });
});

$('#index-info .cont .group2 > .box2 .slide .prev').click(function(){
    $(this).parent().find('.frame ul li:first-child').appendTo('.slide .frame ul');
    $(this).parent().find('.frame ul').animate({'left': 112},0, function(){
        $(this).animate({'left':0},300)
    });
});







//[style] .group3 > box1 - 아이콘 배치

var g1b4_l = $('#index-info .cont .group3 > .box1 ul li').length;
for (var n = 0; n <= g1b4_l; n++){
    $('#index-info .cont .group3 > .box1 ul li').eq(n).find('span').css({'background-position': -n*44 + 'px 0'});
}






//[style] .group4 > box1 - 아이콘 배치

var g4b1_l = $('#index-info .cont .group4 > .box1 ul li').length;
for (var n = 0; n <= g4b1_l; n++){
    $('#index-info .cont .group4 > .box1 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px 0'});
    $('#index-info .cont .group4 > .box1 ul li').eq(n).find('em').css({'background-position': -n*80 + 'px 0'});
}


//[style] .group4 > box6 - 아이콘 배치

var g4b6_l = $('#index-info .cont .group4 > .box6 ul li').length;
for (var n = 0; n <= g4b6_l; n++){
    $('#index-info .cont .group4 > .box6 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px -80px'});
    $('#index-info .cont .group4 > .box6 ul li').eq(n).find('em').css({'background-position': -n*80 + 'px -80px'});
}






//[style] .group4 > box1 - 아이콘 배치

var g5b1_l = $('#index-info .cont .group5 > .box1 ul li').length;
for (var n = 0; n <= g5b1_l; n++){
    $('#index-info .cont .group5 > .box1 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px -640px'});
    $('#index-info .cont .group5 > .box1 ul li').eq(n).find('em').css({'background-position': -n*80 + 'px -640px'});
}





//[style] .group5 > box4 - 아이콘 배치

var g5b4_l = $('#index-info .cont .group5 .box4 ul li').length;
for (var n = 0; n <= g5b4_l; n++){
    $('#index-info .cont .group5 .box4 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px -560px'});
};





//[style] .group6 > div - 아이콘 배치

var g6_l = $('#index-info .cont .group6 > div').length;
for (var n = 0; n <= g6_l; n++){
    $('#index-info .cont .group6 > div').eq(n).find('span').css({'background-position': -n*80 + 'px -320px'});
};






//[style] .group7 > box1 - 아이콘 배치

var g7b1_l = $('#index-info .cont .group7 > .box1 ul li').length;
for (var n = 0; n <= g7b1_l; n++){
    $('#index-info .cont .group7 > .box1 ul li').eq(n).find('span').css({'background-position': -n*80 + 'px -160px'});
    $('#index-info .cont .group7 > .box1 ul li').eq(n).find('em').css({'background-position': -n*80 + 'px -160px'});
}


//[style] .group7 > box5 - 아이콘 배치

var g7b5_l = $('#index-info .cont .group7 > .box5 > ul li').length;
for (var n = 1; n <= g7b5_l; n++){
    $('#index-info .cont .group7 > .box5 > ul li').eq(n-1).find('span').css({'background-position': -n*160 + 'px -240px'});
    $('#index-info .cont .group7 > .box5 > ul li').eq(n-1).find('em').css({'background-position': -n*160 + 'px -240px'});
}






//[style] .group8 > div - 아이콘 배치

var g8_l = $('#index-info .cont .group8 > div').length;
for (var n = 0; n <= g8_l; n++){
    $('#index-info .cont .group8 > div').eq(n).find('span').css({'background-position': -n*80 + 'px -400px'});
};





//[style] .group9 > div - 아이콘 배치

var g9_l = $('#index-info .cont .group9 > div').length;
for (var n = 0; n <= g9_l; n++){
    $('#index-info .cont .group9 > div').eq(n).find('span').css({'background-position': -n*90 + 'px 0'});
    $('#index-info .cont .group9 > div').eq(n).find('em').css({'background-position': -n*90 + 'px 0'});
}






//[style] .group11 > div - 아이콘 배치

var g11_l = $('#index-info .cont .group11 > div').length;
for (var n = 0; n <= g11_l; n++){
    $('#index-info .cont .group11 > div').eq(n).find('span').css({'background-position': -n*90 + 'px -90px'});
    $('#index-info .cont .group11 > div').eq(n).find('em').css({'background-position': -n*90 + 'px -90px'});
}










