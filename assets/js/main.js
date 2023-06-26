// 로그인 페이지를 제외한 공통 헤더 푸터 INCLUDE
$(document).ready(function(){
    $("#subContainer #header").load("../../html/include/header.html");//헤더 INCLUDE
    $("#subContainer #footer").load("../../html/include/footer.html");//푸터 INCLUDE
});

//Multi search 버튼
$(document).ready(function() {
    $('.multi').click(function(){
        $('.multi-contents').toggle();
    });
});

//Multi search 내부 tag-close 버튼 삭제 기능
$(document).ready(function() {
    $('.tag-close').click(function(){
        $(this).parent('div').hide();
    });
});