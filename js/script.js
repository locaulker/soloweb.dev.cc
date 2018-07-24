/*
01. Preloader: (Animated Gif: https://loading.io)
02. Portfolio: using isotope plugin
03. Owl-Carousel: Team Members
04. Progress Bars Skillsets triggered by Waypoints Plugin
05. jQuery Responsive Tabs
06. Magnifier: Magnific-Popup
07. Owl-Carousel: Testimonials/Quality Support
08. jQuery CounterUP Plugin
09. Owl-Carousel: Clients Section
10. Google Map
11. Show/Hide White Navigation Bar
*/

/* ****************************************************
Window on load methods
**************************************************** */
$(window).on('load', function(){
  /* *********************************************
  01. Preloader: (Animated Gif: https://loading.io)
  ********************************************* */
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');


  /* ****************************************************
  02. Portfolio: using isotope plugin
  **************************************************** */
  // Initialize isotope
  $("#isotope-container").isotope({
    // options
  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function(){
    // get filter value
    var filterValue = $(this).attr('data-filter');
    
    // filter portfolio items
    $("#isotope-container").isotope({
      // options
      filter: filterValue
    });

    // active class button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');

  });


});


// document on load functions
$(function(){
  /* *********************************************
  03. Owl-Carousel: Team Members
  ********************************************* */
  // $(".owl-carousel").owlCarousel(); OR
  $("#team-members").owlCarousel({
    items: 2,
    // margin: 10,
    // loop: true,
    rewind: true,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // navText: ['&larr;','&rarr;'],
    // navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 an Up
      0: {
        items: 1
      },
      // breakpoint from 480 an Up
      480: {
        items: 2
      }
    }
  });


  /* ****************************************************
  04. Progress Bars Skillsets triggered by Waypoints Plugin
  **************************************************** */
  $("#progress-elements").waypoint(function() {

    $(".progress-bar").each(function(){
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
    });

    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });


  /* ****************************************************
  5. jQuery Responsive Tabs
  **************************************************** */
  $("#services-tabs").responsiveTabs({
    animation: 'slide', // The panels will slide up and down
    // duration: 1000
  });

  /* ****************************************************
  06. Magnifier: Magnific-Popup
  **************************************************** */
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', // child items selector, clicking opens a popup
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });

  /* *********************************************
  07. Owl-Carousel: Testimonials/Quality Support
  ********************************************* */
  // $(".owl-carousel").owlCarousel(); OR
  $("#testimonial-slider").owlCarousel({
    items: 1,
    // margin: 10,
    // loop: true,
    rewind: true,
    autoplay: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // navText: ['&larr;','&rarr;'],
    // navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });

  /* *********************************************
  08. jQuery CounterUP Plugin: Stats Section
  ********************************************* */
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
    offset: 70
  });

  /* *********************************************
  09. Owl-Carousel: Clients Section
  ********************************************* */
  $("#clients-list").owlCarousel({
    items: 4,
    // margin: 10,
    // loop: true,
    rewind: true,
    autoplay: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // navText: ['&larr;','&rarr;'],
    // navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });


});


/* *********************************************
  10. Google Map Section:
  ********************************************* */
 $(window).on('load', function(){
  var addressString = '230 Broadway, New York, NY 10007, USA';
  var myLatLng = {lat: 40.712742, lng: -74.005969};

  // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: myLatLng   
    });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Click to View Address'
  });

  // 3. Add Info Window
  var infoWindow = new google.maps.InfoWindow({
    content: addressString
  });

  // 4. Display Info Window when user clicks on Marker
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  
  
});


/* document onload function */
$(function() {
/* *********************************************
  11. Show/Hide White Navigation Bar:
  ********************************************* */
  showHideNav();

  // Show/Hide Nav on Page load
  $(window).scroll(function() {
    // Show nav on window's scroll
    showHideNav();
  });

  // Sho/Hide Navigation
  function showHideNav() {
    if( $(window).scrollTop() > 50 ) {
      // Show White Nav Bar
      // alert("Scroll position is > 50px. Your scroll position is: " + $(window).scrollTop());
      $("nav").addClass("white-nav-top");

      // Also Show Dark Logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      // Show back-to-top button
      $("#back-to-top").fadeIn();

    } else {
      // Hide White Nav Bar
      // alert("Scroll position is NOT > 50px. Your scroll position is: " + $(window).scrollTop());
      $("nav").removeClass("white-nav-top");

      // Also Show Normal Logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // Hide back-to-top button
      $("#back-to-top").fadeOut();
    }
  }

});


/* *********************************************
  12. Smooth Scrolling:
  ********************************************* */
  $(function() {
    $("a.smooth-scroll").click(function(e) {
      e.preventDefault();

      // get section id like #about, #team, etc.
      var section_id = $(this).attr("href");

      $("html, body").animate({
        scrollTop: $(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");
      
    });
  });