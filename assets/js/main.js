$(document).ready(function () {
// index.html
    $('#loginBtn').click(function() {
        $('#support').hide();
        $('#login').show();
        $('#loginBtn').addClass('on');
        $('#supportBtn').removeClass('on');
    });
    $('#supportBtn').click(function() {
        $('#login').hide();
        $('#support').show();
        $('#supportBtn').addClass('on');
        $('#loginBtn').removeClass('on');
    });
// 로그인 페이지를 제외한 공통 헤더 푸터 INCLUDE & Change Password 모달
    $("#header").not("#container #header").load("../../html/include/header.html", function () {
        $('.modal-wrap').hide();
        $('#changePw').click(function () {
            var modalWrap = $(this).next('.modal-wrap');
            if (modalWrap.is(":hidden")) {
                modalWrap.show();
            } else {
                modalWrap.hide();
            }
        });
        $(".default-show").each(function() {
            var defaultType = $(this).attr("type");
            $(this).data("defaultType", defaultType);
        });
        
        $(".default-show").on("input", function() {
            var inputVal = $(this).val();
            var showEye = $(this).siblings(".show-eye");
            var hideEye = $(this).siblings(".hide-eye");
            if (inputVal.trim() !== "") {
                showEye.show();
            } else {
                showEye.hide();
                hideEye.hide();
                $(this).attr("type", $(this).data("defaultType"));
            }
            updateChangeConfirmButton();
        });
        
        $(".default-hide").each(function() {
            var defaultType = $(this).attr("type");
            $(this).data("defaultType", defaultType);
        });
        
        $(".default-hide").on("input", function() {
            var inputVal = $(this).val();
            var showEye = $(this).siblings(".show-eye");
            var hideEye = $(this).siblings(".hide-eye");
            if (inputVal.trim() !== "") {
                hideEye.show();
            } else {
                showEye.hide();
                hideEye.hide();
                $(this).attr("type", $(this).data("defaultType"));
            }
            updateChangeConfirmButton();
        });

        function updateChangeConfirmButton() {
            var allInputsFilled = true;
            $(".default-show, .default-hide").each(function() {
                if ($(this).val().trim() === "") {
                    allInputsFilled = false;
                    return false; // exit the loop early if any input is empty
                }
            });
            if (allInputsFilled) {
                $("#changeConfirm").addClass("on");
            } else {
                $("#changeConfirm").removeClass("on");
            }
        }
        
        $(".show-eye").on("click", function() {
            var hideEye = $(this).siblings(".hide-eye");
            $(this).hide();
            hideEye.show();
            $(this).siblings(".default-show").attr("type", "password");
            $(this).siblings(".default-hide").attr("type", "password");
        });
        
        $(".hide-eye").on("click", function() {
            var showEye = $(this).siblings(".show-eye");
            $(this).hide();
            showEye.show();
            $(this).siblings(".default-show").attr("type", "text");
            $(this).siblings(".default-hide").attr("type", "text");
        });
        $("#modifyBtn").on("click", function() {
            var modalWrap = $(this).parents('.modal-wrap');
            if (modalWrap.is(":visible")) {
                modalWrap.hide();
            } else {
                modalWrap.show();
            }
        });
    });
    $("#footer").not("#container #footer").load("../../html/include/footer.html");
});



//sub.html
$(document).ready(function() {
    $('#multi').click(function(){
        $('.multi-contents').toggle();
    });
// Multi search 내부 tag-close 버튼 삭제 기능
    $('.tag-close').click(function(){
        $(this).parent('div').hide();
    });
//sub.html - .multi-contents 영역 제외한 부분 클릭시
    $('html').click(function(e) {   
        if(!$(e.target).parents().hasClass("multi-wrap")) {
            $(".multi-contents").hide();
        }
    });
// Done 버튼 클릭시
    $(".multi-done").on("click", function() {
        $(".multi-contents").hide();
    });
});

//sub.html - result
$(document).ready(function() {
    $('#inquiry').click(function() {
        $('.edp-title').hide();
        $('.table-wrap').show();
    });
});

//upload.html - 파일 선택시 input 파일명 동일하게 변경&Upload 버튼 컬러 변경&reset버튼 활성화
$(document).ready(function() {
    $("#fileUpBtn").on('change', function() {
        var fileName = $("#fileUpBtn").val();
        $(".upload-name").val(fileName);
        $("#findReset").show();
        $("#uploadBtn").addClass('on');
    });
    // 파일 이름이 삭제되었을 때
    $(".upload-name").on('input', function() {
        var fileName = $(".upload-name").val();
        if (fileName === '') {
            $("#findReset").hide();
            $("#uploadBtn").removeClass('on');
        }
    });
    $("#findReset").on('click', function() {
        $("#uploadBtn").removeClass('on');
    });
    $("#findReset").on('click', function() {
        $("#findReset").hide();
    })
});
