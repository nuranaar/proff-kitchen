'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function () {
  $(".page-lang .list-inline-item.active").siblings().hide();
  $(".page-lang .list-inline-item ").click(function (e) {
    e.preventDefault();
    $(e.target).addClass("active");
    $(e.target).siblings().removeClass("active");
    $(e.target).siblings().toggle(0, function () {
    });
  });

});
