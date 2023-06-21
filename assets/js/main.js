// 로그인 페이지 login.asp index.html
    function frmSUB()
    {
        if(frm.id.value=="")
        {
            alert("Please Input your ID.");
            frm.id.focus();
            return false;
        }
        if(frm.pwd.value=="")
        {
            alert("Please Input your Password.");
            frm.pwd.focus();
            return false;
        }
        frm.submit();
    }
    