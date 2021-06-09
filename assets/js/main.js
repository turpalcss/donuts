(function ($) {
    "use strict";

    /*****************************
    * Commons Variables
    *****************************/
    var $window = $(window),
    $body = $('body');

    /*****************************
    * Off Canvas Function
    *****************************/
    (function () {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
            $offCanvasToggle.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $body.addClass('offcanvas-open');
                $($target).addClass('offcanvas-open');
                $offCanvasOverlay.fadeIn();
                if ($this.parent().hasClass('mobile-menu-toggle')) {
                    $this.addClass('close');
                }
            });
            $('.offcanvas-close, .offcanvas-overlay').on('click', function (e) {
                e.preventDefault();
                $body.removeClass('offcanvas-open');
                $offCanvas.removeClass('offcanvas-open');
                $offCanvasOverlay.fadeOut();
                $mobileMenuToggle.find('a').removeClass('close');
            });
    })();


    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function (e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();

 
})(jQuery);

var glide = new Glide('.glide', {
    type: 'carousel',
    gap: 0,
    autoplay: 5000
}).mount();
function onVideoStop() {
    glide.play();
    glide.autoplay.start();
}
function onVideoPlay() {
    glide.pause();
    glide.autoplay.stop();
}



const elements = document.querySelectorAll(".hidden");
const triggerMultiplier = 1.2;
const windowHeight = window.innerHeight / triggerMultiplier;

scrollAppear = () => {
  elements.forEach(element => {
    //   get each element's distance from top of screen & computed height
    let positionFromTop = element.getBoundingClientRect().top;
    let elementHeight = parseInt(window.getComputedStyle(element).height);

    // trigger animation on scroll down
    if (positionFromTop < windowHeight) {
      element.classList.replace("hidden", "fade-in");
    }

    // re-hide elements after leaving the screen
    if (
      positionFromTop > windowHeight * triggerMultiplier ||
      positionFromTop < -elementHeight
    ) {
      
    }
  });
};

// run function when scrolling
window.addEventListener("scroll", scrollAppear);


// hide on scroll menu , show up
var lastScrollTop = 0;
navbar = document.getElementById("scrollHeader");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-120px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})