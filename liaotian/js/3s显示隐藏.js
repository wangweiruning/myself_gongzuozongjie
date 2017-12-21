 /**
 * 3s显示隐藏功能
 * 2017-11-13
 * wangweiruning
 * **/
 
 $(function () {
            $("#msgQQ").hide();
            $("#showMsg").click(function () {    
                $("#msgQQ").slideDown(3000, close);   //3秒时间显示弹框后调用close函数
            });
        });
        function close() {
            setTimeout(function () {
                $("#msgQQ").slideUp();   //3秒后隐藏弹框
            }, 3000);  