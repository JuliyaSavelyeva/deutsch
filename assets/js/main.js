  $(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<img class="slick-prev" src="assets/img/left.svg"/>',
        // nextArrow: '<img class="slick-next" src="assets/img/right.svg"/>',
        prevArrow: document.querySelector('#left'),
        nextArrow: document.querySelector('#right'),
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });

    
    $('.single-item').slick({
      infinite: true,
      autoplaySpeed: 2000,
      speed: 1000,
      prevArrow: document.querySelector('#btn-left'),
      nextArrow: document.querySelector('#btn-right')
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
      e.preventDefault();
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });


    $('img.img-svg').each(function(){
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    });

    $(window).scroll(function () {
      var nav = $('.nav');
      if ($(this).scrollTop() > 50) {
              nav.removeClass(".nav");
        nav.addClass("nav-fixed");
      } else {
        nav.removeClass("nav-fixed");
      }
    });
  });