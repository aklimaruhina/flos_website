var $swiperSelector = $('.slider-conainer');

$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-sliders-' + index);
    
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 4;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;
    var watchOverflow = $this.data('watch-overflow') ? $this.data('watch-overflow') : true;
  
    var swiper = new Swiper('.swiper-sliders-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      watchOverflow: watchOverflow,
      spaceBetween: spaceBetween,
      loopFillGroupWithBlank: true,
      
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
          slidesPerGroup: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
          slidesPerGroup: slidesTablet,
        },
        480: {
           slidesPerView: slidesMobile,
           slidesPerGroup: slidesMobile
        }
      },
      
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {

            return current + '-' + (total - 1)+' of '+ swiper.slides.length; 
        }

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // dragSize: dragSize
      },

   });
    // console.log(swiper.slides.length);

});
var $swiperSelector2 = $('.slider-2');

$swiperSelector2.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);
    
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 6;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 4;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 3.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;
    var watchOverflow = $this.data('watch-overflow') ? $this.data('watch-overflow') : true;
  
    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      watchOverflow: watchOverflow,
      spaceBetween: spaceBetween,
      loopFillGroupWithBlank: true,
      slidesPerView: 6,
      slidesPerGroup: 6,
      // breakpoints: {
      //   1920: {
      //     slidesPerView: 6,
      //     slidesPerGroup: 6,
      //   },
      //   992: {
      //     slidesPerView: slidesTablet,
      //     slidesPerGroup: slidesTablet,
      //   },
      //   480: {
      //      slidesPerView: slidesMobile,
      //      slidesPerGroup: slidesMobile
      //   }
      // },
      
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {

            return current + '-' + (total - 1)+' of '+ swiper.slides.length; 
        }

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // dragSize: dragSize
      },

   });
    console.log(swiper.slides.length);

});
var swiper2 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#toTopBtn').fadeIn();
  } else {
    $('#toTopBtn').fadeOut();
  }
});

$('#toTopBtn').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});
  $("a.nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$(window).scroll(function(){

  let headerOffset = $(".header").height() * 2;      
   if($(window).scrollTop() > headerOffset){
    $('.navbar').addClass('fixed-top');
     navbar_height = document.querySelector('.navbar').offsetHeight;
     document.body.style.paddingTop = navbar_height + 'px';
   } else {
     // document.getElementById('navbar_top').classList.remove('fixed-top');
     // document.getElementById('navbar_top').classList.add('unsticky');
     $('.navbar').removeClass('fixed-top');
      // remove padding top from body
     document.body.style.paddingTop = '0';
   }
});