function resizeDevice(){var a=$(".device.iphone .screen"),b=$(".device.macbook .screen");a.css("height",1.77*a.width()),b.css("height",b.width()/1.6)}function switchDevices(a){setTimeout(function(){a==devices.length&&(a=0),$(".device").removeClass(devices[a]).addClass(devices[a+1==devices.length?0:a+1]);var b=setInterval(function(){$(window).resize(),clearInterval(b)},500);switchDevices(a+1)},4e3)}function fixedSwitch(){$("body").hasClass("menu-open")||menuItems.each(function(){var a=0,b=$(this).position().top+$(this).outerHeight(!0)/2;sectionSwitch.each(function(){var c=$(this).offset().top-$(window).scrollTop(),d=c+$(this).outerHeight(!0),e=b>c&&d>b;a+=e?1:0}),a?$(this).addClass("dark"):$(this).removeClass("dark")})}function calculatePrice(){var a,b,c=$(".square-small.active[data-role='period']").data("value"),d=$(".square-small.active[data-role='rooms']").data("value"),e=$('[data-product="website-design"]').hasClass("active")?1:0,f=$('[data-product="facebook-app"]').hasClass("active")?1:0,g=$('[data-product="booking-engine"]').hasClass("active")?1:0,h=e+""+f+g,i=495,j=$(".calculated-price");switch(h){case"100":a=20,b=200;break;case"010":a=10,b=100;break;case"001":1==d?(a=20,b=200,i=0):2==d?(a=30,b=300,i=0):3==d&&(a=40,b=400,i=0);break;case"110":a=25,b=250,i=695;break;case"101":1==d?(a=35,b=350):2==d?(a=45,b=450):3==d&&(a=55,b=550);break;case"011":1==d?(a=25,b=250):2==d?(a=35,b=350):3==d&&(a=45,b=450);break;case"111":1==d?(a=40,b=400,i=695):2==d?(a=50,b=500,i=695):3==d&&(a=60,b=600,i=695);break;default:a="",b="",i=""}if(i+a+b){var k="";parseInt(i)&&(k=" + "+i+"€ one-time set-up fee</span>"),j.html("month"==c?a+"€/month <span>"+k:b+"€/year <span>"+k)}else j.html("")}var devices=["macbook","iphone"];$(window).resize(function(){resizeDevice()}),$(window).load(function(){$(".device.iphone .screen").css("height",1.77*$(".device.iphone .screen").width()),$(".device.macbook .screen").css("height",$(".device.macbook .screen").width()/1.6),resizeDevice()});var interval=setInterval(function(){resizeDevice(),clearInterval(interval)},500);switchDevices(0),$(document).ready(function(){$(".wrapper").delay(300).queue(function(a){$(this).removeClass("hidden"),$("#preloader").addClass("fadeOutUp"),a()}),fixedSwitch(),calculatePrice()}),$(window).load(function(){$("body").delay(900).queue(function(a){fixedSwitch(),a()})}),$("a:not([href=#]):not([href*=#])").click(function(a){a.preventDefault();var b=$(this).attr("href");$(".wrapper, .main-menu, .hamburger-menu, .language-selector").removeClass("fadeInUp").addClass("fadeOutUp").delay(1e3).queue(function(a){window.location.href=b,a()})}),$("a[data-trigger-menu]").click(function(a){a.preventDefault(),$("body").toggleClass("menu-open"),$(".main-menu ul li").removeClass("dark"),$(".hamburger-icon").toggleClass("active")}),$(window).resize(function(){Modernizr.mq("(min-width: 991px)")&&$("body").removeClass("menu-open")}),$(window).scroll(function(){var a=$(window).height(),b=$(window).scrollTop(),c=b/a;1>=c&&$(window).width()>500?($(".text-main, .scroll-down").css("opacity",1-c),$(".text-main h1, .scroll-down").css("margin-top",a/1.4*(b/a))):($(".text-main").css("opacity",1),$(".text-main h1").css("margin-top",0))}),$(".scroll-down").click(function(){var a=$(".section-white").first();return $("html,body").animate({scrollTop:a.offset().top},1e3),!1});var overlayRequest=$(".fixed-container-request");overlayRequest.hide(),$(document).ready(function(){overlayRequest.removeClass("hidden")}),$(".open-overlay").click(function(a){a.preventDefault(),overlayRequest.fadeIn(250)}),$(".close-overlay").click(function(a){a.preventDefault(),overlayRequest.fadeOut(250)});var menuItems=$(".main-menu li:not(.collapse)"),sectionSwitch=$(".section-white");$(window).scroll(function(){fixedSwitch()}),$('[data-toggle="collapse"]').click(function(){function a(){b++,fixedSwitch(),b>3&&clearInterval(c)}var b=0,c=setInterval(a,100)}),$(".price-form .square").click(function(){$(this).toggleClass("active"),calculatePrice()}),$(".price-form .square-small").click(function(){var a=$(this).data("role");$('.square-small[data-role="'+a+'"]').removeClass("active"),$(this).addClass("active"),calculatePrice()}),$(".price-form input:radio").change(function(){calculatePrice()}),$(function(){$("a[href*=#]:not([href=#]):not([data-toggle])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}})});