$(document).ready(function () {

    $('.chage1').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)');
    });
    $('.chage2').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1618215650067-8e8addd96b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1618215649872-6e3143a716ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=8)');
    });
    $('.chage3').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1579171931975-97962e46be2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1579174786776-a488cbc8ec5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)');
    });
    $('.chage4').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1550923048-a50483e313cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=800)');
    });
    $('.chage5').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1598438401708-31f5dbbdc200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1564595037946-dcb73763aa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)');
    });
    $('.chage6').hover(function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)')
    }, function () {
        $(this).css('background-image', 'url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)');
    });




    // ------------------ login & register page ------------------

    // 註冊
    const addSend = document.querySelector('.addSend');


    function registerBtn() {

        let addaccount = document.getElementById('addaccount').value;
        let addpassword = document.getElementById('addpassword').value;

        //建立資料
        let data = {};
        data.email = addaccount;
        data.password = addpassword;

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
        xhr.setRequestHeader("Content-type", "application/json");
        let str = JSON.stringify(data);  //轉成字串
        xhr.send(str);

        // 運行確認
        xhr.onload = function () {
            var back = JSON.parse(xhr.responseText);
            if (back.email == "" && back.password == "") {
                alert("資料未正確輸入");
            } else if (back.message == "帳號註冊成功") {
                alert("註冊成功");
                addaccount = '';
                password = '';
                window.location.href="customer.html";
            } else if (back.message == "此帳號已被使用") {
                alert("註冊失敗");
            } else {
                alert("註冊失敗");
            }

        };
    }



    // // 登入
    const loginSend = document.querySelector('.loginSend');
    loginSend.addEventListener('click', login);

    function login() {
        let loginaccount = document.getElementById('loginaccount').value;
        let loginpassword = document.getElementById('loginpassword').value;

        let account = {};
        account.email = loginaccount;
        account.password = loginpassword;

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
        xhr.setRequestHeader("Content-type", "application/json");
        let data = JSON.stringify(account);
        xhr.send(data);

        xhr.onload = function () {
            let back = JSON.parse(xhr.responseText);
            if (back.message == "登入成功") {
                alert("登入成功");
                window.location.href="customer.html";
            } else {
                alert("登入失敗");
            }
        };

    }

    // ------------------ login & register page ------------------

});
