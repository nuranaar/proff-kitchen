'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick';
require('./countto');



$(function () {
  $(".page-lang .list-inline-item.active").siblings().hide();
  $(".page-lang .list-inline-item ").click(function (e) {
    e.preventDefault();
    $(e.target).addClass("active");
    $(e.target).siblings().removeClass("active");
    $(e.target).siblings().toggle(0, function () {
    });
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

  $("#order-form").submit(e => {
    e.preventDefault();
    let productName = $("input[name='product-name']").val();
    let phone = $("input[name='phone']").val();
    let email = $("input[name='email']").val();
    $.ajax({
      type: "POST",
      url: "url",
      data: {
        productName: productName,
        phone: phone,
        email: email
      },
      success: () => {
        $("#orderModal").modal("hide")
        $("#successModal").modal("show")
      },
      dataType: "json"
    });
  })

  $("#contact-form").submit(e => {
    e.preventDefault();
    let fullName = $("#contact-form input[name='full-name']");
    let email = $("#contact-form input[name='email']");
    let message = $("#contact-form textarea[name='message']");
    // fullName = ''
    // message = ''
    // email = ''
    $.ajax({
      type: "POST",
      url: "url",
      data: {
        fullName: fullName.val(),
        email: email.val(),
        message: message.val()
      },
      success: () => {
        fullName.val('')
        message.val('')
        email.val('')
      },
      dataType: "json"
    });
  })
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

});