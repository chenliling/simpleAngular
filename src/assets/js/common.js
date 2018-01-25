/*// 公共脚本
// 多个页面会用到的全局脚本
function getScrollTop(){
    var scrollTop = 0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
};
function getClientHight(){
    var clientHeight = 0;
    if(document.body.clientHeight&&document.documentElement.clientHeight){
        clientHeight = Math.min(document.body.clientHeight,document.documentElement.clientHeight);
    }
    else{
        clientHeight = Math.max(document.body.clientHeight,document.documentElement.clientHeight);
    }
    return clientHeight;
};
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}*/
$(function(){
    //判断是否为安卓或ios
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1 //是否iPad
            };
        }()
    };

    if (browser.versions.android) {
    }
    if (browser.versions.ios) {
    }
    //弹窗里下拉框
    $('#select').click(function () {
        $('.selectcontent').toggle();
        $(this).find('i').toggleClass('active')
    });
    //弹窗出
    $(".pop-all").height($(window).height());
    $(".pop").height($(window).height());
    $('.classifer').click(function () {
        $(".pop").animate({"right":0},500);
        $(".pop-all").fadeIn();
        $('.selectcontent').hide();
    });
    //弹窗收
    $('#popleft').click(function () {
        $(".pop").animate({"right":-100+"%"},300);
        $(".pop-all").fadeOut();
        $('.selectcontent').hide();
    });


});
