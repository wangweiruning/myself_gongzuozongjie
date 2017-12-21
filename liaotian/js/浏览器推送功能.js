/**
 * 浏览器推送
 * 2017-11-13
 * wangweiruning
 * **/


window.onload= function(){
 
    justify_notifyAPI();   //判断浏览器是否支持 Web Notifications API
    justify_showMess();   //浏览器是否支持弹出实例
    otification_construct(); //实例展示弹出的内容
    otification_event();   //Notifications API的相关事件 
 
  }
 
  //判断浏览器是否支持 Web Notifications API 
  function justify_notifyAPI(){
    if (window.Notification) {
      // 支持
      console.log("支持"+"Web Notifications API");
    } else {
      // 不支持
      console.log("不支持"+"Web Notifications API");
    }
  }
 
 
  //浏览器是否支持弹出实例
  function justify_showMess(){
 
    if(window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function(status) {
        if (status === "granted") {
          var n = new Notification('收到信息:-O', {
            body: '这里是通知内容！你想看什么客官？',
            icon:"../../images/headerPic/QQ图片20160525234650.jpg"
          });
          // alert("Hi! this is the notifyMessages!");
        } else{
          var n = new Notification("baby! i will leave you!");
        }
 
      });
    }
  }
 
 
  // 实例展示弹出的内容
  function otification_construct(){
 
    var notification = new Notification('收到新邮件', {
      body: '您有1封来自雪静的未读邮件。',
      dir: "auto",
      lang:"zh-CN",
      tag: "a1",
      icon:"../../images/headerPic/772513932673948130.jpg"
    });
    console.log(notification.title); // "收到新邮件"
    console.log(notification.body); // "您总共有3封未读邮件。"
  }
 
 
  //Notifications API的相关事件
  function otification_event(){
 
    var MM = new Notification("Hi! My beautiful little princess！",{
      body: '您有1封来外太空的邮件。',
      icon:"../../images/headerPic/20100114212301-1126264202.jpg"
    });
 
    MM.onshow = function() {
      console.log('Notification showning!');
    };
    MM.onclick = function() {
      console.log('Notification have be click!');
    };
    MM.onerror = function() {
      console.log('Notification have be click!');
      // 手动关闭
      MM.close();
    };
  }