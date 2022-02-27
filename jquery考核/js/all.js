$(document).ready(function () {
    // ul下拉選單
    $('.pagbox1inner').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.pagbox2').slideToggle(500);
        $(this).parent().siblings().find('.pagbox2').slideUp();
    });

    //fixedtop
    $('.btn1').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
    }); 

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters 可選參數
        direction: 'horizontal',
        autoplay:true,
        speed:1500,

        effect: 'coverflow',
        coverflowEffect: {
          rotate: 100,
          slideShadows: false,
        },
        loop: true,
      
        
        // If we need pagination 分頁
        pagination: {
          el: '.swiper-pagination',
          type:'progressbar',
        },
      });



});