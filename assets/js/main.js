// 로그인 페이지를 제외한 공통 헤더 푸터 INCLUDE
$(document).ready(function(){
    $("#header").not("#container #header").load("../../html/include/header.html");//헤더 INCLUDE
    $("#footer").not("#container #footer").load("../../html/include/footer.html");//푸터 INCLUDE
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

//upload.html - 파일 선택시 input 파일명 동일하게 변경&Upload 버튼 컬러 변경
$(document).ready(function() {
    $("#fileUpBtn").on('change',function(){
        var fileName = $("#fileUpBtn").val();
        $(".upload-name").val(fileName);
        $("#uploadBtn").addClass('on');
    });
    // 파일 이름이 삭제되었을 때
    $(".upload-name").on('input', function() {
        var fileName = $(".upload-name").val();
        if (fileName === '') {
            $("#uploadBtn").removeClass('on');
        }
    });
});