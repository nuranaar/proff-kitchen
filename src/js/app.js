'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick'

$(function () {
  $(".page-lang .list-inline-item.active").siblings().hide();
  $(".page-lang .list-inline-item ").click(function (e) {
    e.preventDefault();
    $(e.target).addClass("active");
    $(e.target).siblings().removeClass("active");
    $(e.target).siblings().toggle(0, function () {
    });
  });


  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],

    $('.slider').slick({
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

    console.log(gallery_dot, index, slide);
  }
  $(".gallery-dots").click((e) => {
    slide_show($(e.currentTarget).data("page"));
  });


  $(".more-info .top").click(e => {
    // $(".more-info .body").toggle("slowfast");
    $(".product-table").toggle("linear");
    $(e.currentTarget).toggleClass("active")
  });

  


});
