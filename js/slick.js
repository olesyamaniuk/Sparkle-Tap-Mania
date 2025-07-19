$(function () {
  $(".t-l-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".t-l-reviews-list-left",
    nextArrow: ".t-l-reviews-list-right",
  });
});
