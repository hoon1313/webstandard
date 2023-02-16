$(document).ready(function(){


/* 탭메뉴 */

 $(".tab_menu ul > li").click(function (e) {
    e.preventDefault();
    $(".tab_menu").find("ul ul").hide();
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".tab_menu").find("li.active > ul").show();
});

// var $tab_list = $(".tab_menu");

// $(".tab_menu").find("ul ul").hide();
// $(".tab_menu").find("li.active > ul").show();

// function tabMenu(e) {
//     e.preventDefault();
//     var $this = $(this);
//     $this.next("ul").show().parent('li').addClass("active").siblings("li").removeClass("active").find(">ul").hide();
// }
// $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


/* banenr 스크립트 */
/* html 마크업 세팅 -> css 연동 -> jQuery 연동 -> jQuery 호출 */
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
});
/* 버튼 클릭 시 전체 메뉴를 보이게 하기 */
$(".tit .btn").click(function (e) {
    e.preventDefault();
    // $("#cont_nav").css("display", "block");
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();

    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle();
    $(".tit .btn").toggleClass("on");
});

/* gallery */
$(".gallery_img").slick({
    pauseOnHOver: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: true,
    arrows: false,
    fade: true,
});

$(".play").click(function () {
    $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function () {
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function () {
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function () {
    $(".gallery_img").slick("slickNext");
});

/* layer popup */
$("#layer").hide();

$(".popup li.layer").click(function (e) {
    e.preventDefault();
    $("#layer").fadeIn(200);
});

$("#layer .close").click(function (e) {
    e.preventDefault();
    $("#layer").fadeOut(200);
});

/* window popup */
$(".popup li.window").click(function (e) {
    e.preventDefault();
    // window.open("파일명", "팝업이름", "옵션설정");
    // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("popup.html", "windowpop", "width=800, height:590, left:50, top:50, scrollbars=0, toolbar=0, menubar=0");
});

/* lightgallery */
lightGallery(document.querySelector('.lightgallery'), {
    speed: 500,
    plugins: [lgThumbnail],
    // ... other settings
});

});