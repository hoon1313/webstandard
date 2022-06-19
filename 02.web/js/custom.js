            // 라이트 박스 
            lightGallery(document.querySelector('.lightgallery'), {
                thumbnail: true,
            });
            

            
       
    

            //윈도우 팝업
            $(".window").click(function(e){
                e.preventDefault();
                //window.open("파일명", "팝업이름", "옵션설정")
                // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
                window.open("sample_popup.html" , "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
            });


            //레이어 팝업
            $(".layer").click(function(e){
                e.preventDefault();
                // $("#layer").css("display","block");
                // $("#layer").show();
                $("#layer").slideDown();
            });
            $("#layer .close").click(function(e){
                e.preventDefault();
                // $("#layer").css("display","block");
                // $("#layer").show();
                $("#layer").slideUp();
            });
  


            // 탭 메뉴
            var $tab_list = $(".tab_menu");

            $tab_list.find("ul ul").hide();
            $tab_list.find("li.active > ul").show();

            function tabMenu(e) {
                e.preventDefault();
                var $this = $(this);
                $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide()
            }
            $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

            // 배너 
            // html 마크업 세팅 -> css연동 -> jQuery 연동 -> jQuery(slick)호출
            $(".banner").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true
            });

            // 갤러리
            $(".gallery_img").slick({
                arrows:false,
                pauseOnHover:true,
                autoplay:true,
                fade:true,
                infiinite:true,
                autoplaySpeed:3000,
                speed:300,
                slidesToShow:1
            });
            $(".play").click(function(){
                $(".gallery_img").slick("slickPlay");
            })
            $(".pause").click(function(){
                $(".gallery_img").slick("slickPause");
            })
            $(".prev").click(function(){
                $(".gallery_img").slick("slickPrev");
            })
            $(".next").click(function(){
                $(".gallery_img").slick("slickNext");
            })
            


            // 버튼 클릭 시 전체메뉴 보이게하기
            $(".title .btn").click(function (e) {
                e.preventDefault();
                // $("#cont_nav").css("display", "block");
                // $("#cont_nav").show();
                // $("#cont_nav").fadeIn();
                // $("#cont_nav").slideDown();
                // $("#cont_nav").toggle();
                // $("#cont_nav").fadeToggle();
                $("#cont_nav").slideToggle(300);
                $(this).toggleClass("on");
                // 윗줄에서 $(".title .btn") 대신 자기자신을 가리키는 this 사용
            });