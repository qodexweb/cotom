$(function () {

    //===== Prealoder
    $(window).load(function() {
      $("#loading").fadeOut(500);
  });
  
    //===== Sticky

  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 110) {
          $(".header-area").removeClass("sticky");
      } else {
          $(".header-area").addClass("sticky");
      }
  });
  
  
//overlay-search
$('.overlay-menu').on('click', function (){
  $('.overlay-menu-content').addClass('active');
});

$('.close-overlay-menu').on('click', function (){
  $('.overlay-menu-content').removeClass('active');
});

//===== hero-carousel-active
  $('.testimonial-two-active').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
    }
    ]
  });


//counter up
$('.count').counterUp({
    delay: 30,
    time: 3000
});

//magnific-popup
$('.video-popup').magnificPopup({
	type: 'iframe'
});


//scroll to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 1000);
});


// slicknav
$("#mobile-menu").slicknav({
  prependTo: "#mobile-menu-wrapp",
  'allowParentLinks': true
});



});

