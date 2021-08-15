'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick';
require('./countto');



$(function () {
  $(".page-lang .active").siblings().hide();
  $(".page-lang .list-inline-item").on("click", function (e) {
    if ($(e.target).hasClass("active")) {
      $(e.target).siblings().toggle(0);
    }
  });
  $(".page-lang .list-inline-item a").click(function (e) {
    $(e.target).parent().addClass("active");
    $(e.target).parent().siblings().removeClass("active");
    $(e.target).parent().siblings().hide();
  });



  $('#products-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("textarea[name='message']").keyup(function (e) {
    e.preventDefault();
    const text_length = $(e.currentTarget).val().length
    $(e.currentTarget).next().text(`${text_length}/160`)
  });

  let slide_show = (index) => {
    let gallery_dot = $(`.gallery-dots[data-page=${index}]`);
    let slide = $(`.mySlides[data-page=${index}]`);

    gallery_dot.addClass("active");
    gallery_dot.siblings().removeClass("active");

    slide.addClass("d-block");
    slide.siblings().removeClass("d-block");

  }
  $(".gallery-dots").click((e) => {
    slide_show($(e.currentTarget).data("page"));
  });


  if ($('#statistic').length) {
    let scroll = false
    $(window).scroll(() => {
      let eT = $('#statistic').offset().top;
      let wS = $(this).scrollTop();
      if ((eT - 500) < wS && !scroll) {
        $('.counter').countTo();
        scroll = true;
      }
    })
  }
  // debugger
  $('#partners-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    // centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


  const sliceText = () => {
    const elems = document.querySelectorAll(".slice-text")
    for (let i = 0; i < elems.length; i++) {
      const elem = $(elems[i])
      const text = elem.text()
      const count = elem.data("count")
      elem.text(text.slice(0, count) + "...")
    }
  }
  sliceText()


  $(".navbar-toggler").click((e) => {
    $(".collapse").toggle(0)
    $(".collapse").toggleClass("show")
  })
  $(".search-toggler").click((e) => {
    $(".search-collapse").toggleClass("mobile-search")
    $(".search-btn .far").removeClass("fa-search")
    $(".search-btn .far").addClass("fa-arrow-right")
    // $(".search-collapse").toggle(0)
  })
  $(".search-icon").click((e) => {
    $(".search-collapse").toggleClass("mobile-search")
    $(".search-btn .far").removeClass("fa-arrow-right")
    $(".search-btn .far").addClass("fa-search")
    // $(".search-collapse").toggle(0)
  })





});