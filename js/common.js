$(document).ready(function() {

  /*fullpage 시작*/
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    sectionsColor : ['#fff', '#f3f3f3', '#fff', '#f3f3f3', '#fff', '#f3f3f3'],
    navigation: true,
    anchors:['visual', 'best', 'chef', 'recipe', 'food_lab', 'footer'],
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

  



});