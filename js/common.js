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



});