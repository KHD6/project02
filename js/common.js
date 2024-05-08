$(document).ready(function() {

  /*fullpage 시작*/
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    sectionsColor : ['#fff', '', '#fff', '#f3f3f3', '#fff', '#f3f3f3'],
    navigation: true,
    anchors:['visual1', 'best2', 'chef3', 'recipe4', 'food_lab5', 'footer6'],
    navigationTooltips: ['VISUAL', 'BEST', 'CHEF', 'RECIPE', 'FOOD<br>LAB', 'FOOTER'],
    navigationPosition: 'left',
    showActiveTooltip: true,
    responsiveWidth: 1024,
	});
  /*fullpage 끝*/


  /*m-menuwrap 시작*/
  $(".open-menu").click(function(){
   $(".m-menuwrap").stop().slideDown(2000);
  });

  $(".close-menu").click(function(){
   $(".m-menuwrap").stop().slideUp(500);
  });
 /*m-menuwrap 끝*/



  /*m-menuwrap nav 시작*/
  $(".depth02").slideUp();
  
  $(".depth01").click(function(){
    if($("+.depth02", this).css("display")=="none"){
      $(".depth01").removeClass("on")
      $(this).addClass("on")
      $(".depth02").stop().slideUp();
      $("+.depth02", this).stop().slideDown();
    }else{
      $(".depth01").removeClass("on")
      $(".depth02").slideUp();
    }
  });
  /*m-menuwrap nav 끝*/



  /*M 슬라이드 js 시작*/
   var mswiper = new Swiper(".m-mySwiper", {
     loop: true,
     slidesPerView: 1.4,
     spaceBetween: 30,
     centeredSlides : true,
     autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     pagination: {
      el: ".m-swiper-pagination",
    },
   });
  /*M 슬라이드 js 끝*/



  /*PC 슬라이드 js 시작*/
  var subSwiper = new Swiper(".Swiper1", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  var subSwiper = new Swiper(".Swiper2", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mainSwiper = new Swiper(".Swiper3", { /*기준점 슬라이드*/
    loop: true,
    allowTouchMove : false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var pagingSwiper = new Swiper(".Swiper3", {
    loop: true,
    allowTouchMove : false,
    pagination: {
      el: ".swiper-pagination2",
      type: "progressbar",
    },
  });

  var subSwiper = new Swiper(".Swiper4", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var subSwiper = new Swiper(".Swiper5", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  mainSwiper.controller.control = pagingSwiper;
  /*PC 슬라이드 js 끝*/



  /*best m-슬라이드 시작*/
  var mbestswiper = new Swiper(".m-bestSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  /*best m-슬라이드 끝*/



  /*best pc-슬라이드 시작*/
  var bestswiper = new Swiper(".bestSwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
     autoplay: {
       delay: 10000,
       disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next.bestbtn",
      prevEl: ".swiper-button-prev.bestbtn",
    },
  });
 /*best pc-슬라이드 끝*/



 /*chef m-슬라이드 시작*/
 var mchefSwiper = new Swiper(".m-chefSwiper", {
  loop: true,
  effect: "cards",
  grabCursor: true,
});
 /*chef m-슬라이드 끝*/

 /*recipe 애니메이션 시작*/
 if($(window).width() < 1024) {
   var recipeli = $("#recipe .recipe-box li")
   var recipeli1 = $("#recipe .recipe-box li:nth-child(1)")
   var recipeli2 = $("#recipe .recipe-box li:nth-child(2)")
   var recipeli3 = $("#recipe .recipe-box li:nth-child(3)")
   var recipeli4 = $("#recipe .recipe-box li:nth-child(4)")
   var recipeli5 = $("#recipe .recipe-box li:nth-child(5)")

   $(recipeli1).click(function(){
    if($(this).hasClass("card-on") === true){
      $(this).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
    }else{
      $(recipeli).removeClass("card-on")
      $(this).addClass("card-on")
      $(recipeli).removeClass("aftercard")
      $(recipeli2).addClass("aftercard")
      $(recipeli3).addClass("aftercard")
      $(recipeli4).addClass("aftercard")
      $(recipeli5).addClass("aftercard")
    }
   });

   $(recipeli2).click(function(){
    if($(this).hasClass("card-on") === true){
      $(this).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
    }else{
      $(recipeli).removeClass("card-on")
      $(this).addClass("card-on")
      $(recipeli).removeClass("aftercard")
      $(recipeli3).addClass("aftercard")
      $(recipeli4).addClass("aftercard")
      $(recipeli5).addClass("aftercard")
    }
   });

   $(recipeli3).click(function(){
    if($(this).hasClass("card-on") === true){
      $(this).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
    }else{
      $(this).addClass("card-on")
      $(recipeli).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
      $(recipeli4).addClass("aftercard")
      $(recipeli5).addClass("aftercard")
    }
   });

   $(recipeli4).click(function(){
    if($(this).hasClass("card-on") === true){
      $(this).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
    }else{
      $(recipeli).removeClass("card-on")
      $(this).addClass("card-on")
      $(recipeli).removeClass("aftercard")
      $(recipeli5).addClass("aftercard")
    }
   });

   $(recipeli5).click(function(){
    if($(this).hasClass("card-on") === true){
      $(this).removeClass("card-on")
      $(recipeli).removeClass("aftercard")
    }else{
      $(recipeli).removeClass("card-on")
      $(this).addClass("card-on")
      $(recipeli).removeClass("aftercard")
    }
   });
  }

  $(window).resize(function(){

   if($(window).width() < 1024) {
    var recipeli = $("#recipe .recipe-box li")
    var recipeli1 = $("#recipe .recipe-box li:nth-child(1)")
    var recipeli2 = $("#recipe .recipe-box li:nth-child(2)")
    var recipeli3 = $("#recipe .recipe-box li:nth-child(3)")
    var recipeli4 = $("#recipe .recipe-box li:nth-child(4)")
    var recipeli5 = $("#recipe .recipe-box li:nth-child(5)")
 
    $(recipeli1).click(function(){
     if($(this).hasClass("card-on") === true){
       $(this).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
     }else{
       $(recipeli).removeClass("card-on")
       $(this).addClass("card-on")
       $(recipeli).removeClass("aftercard")
       $(recipeli2).addClass("aftercard")
       $(recipeli3).addClass("aftercard")
       $(recipeli4).addClass("aftercard")
       $(recipeli5).addClass("aftercard")
     }
    });
 
    $(recipeli2).click(function(){
     if($(this).hasClass("card-on") === true){
       $(this).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
     }else{
       $(recipeli).removeClass("card-on")
       $(this).addClass("card-on")
       $(recipeli).removeClass("aftercard")
       $(recipeli3).addClass("aftercard")
       $(recipeli4).addClass("aftercard")
       $(recipeli5).addClass("aftercard")
     }
    });
 
    $(recipeli3).click(function(){
     if($(this).hasClass("card-on") === true){
       $(this).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
     }else{
       $(this).addClass("card-on")
       $(recipeli).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
       $(recipeli4).addClass("aftercard")
       $(recipeli5).addClass("aftercard")
     }
    });
 
    $(recipeli4).click(function(){
     if($(this).hasClass("card-on") === true){
       $(this).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
     }else{
       $(recipeli).removeClass("card-on")
       $(this).addClass("card-on")
       $(recipeli).removeClass("aftercard")
       $(recipeli5).addClass("aftercard")
     }
    });
 
    $(recipeli5).click(function(){
     if($(this).hasClass("card-on") === true){
       $(this).removeClass("card-on")
       $(recipeli).removeClass("aftercard")
     }else{
       $(recipeli).removeClass("card-on")
       $(this).addClass("card-on")
       $(recipeli).removeClass("aftercard")
     }
    });    
    }
  });
 /*recipe 애니메이션 끝*/





  



});