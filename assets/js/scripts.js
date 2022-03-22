$(function () {
  let menuBtn = $("#side-menu-btn");
  let sideMenu = $(".side-menu");
  let closeBtn = $(".close-btn");

  menuBtn.click(function () {
    sideMenu.toggleClass("active");
  });

  closeBtn.click(function () {
    sideMenu.removeClass("active");
  });

  $(window).scroll(function () {
    let navbar = $("nav");
    let scrolled = $(window).scrollTop();

    if (scrolled > 100) {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });

  $(".service-area .slick-prev").text("Prev");

  $(".service-wrapper").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  });

  $(".banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });

  $(".banner-content").children().addClass("animated fadeInUp");

  $(".side-menu .menu-content ul li").each(function (index) {
    index++;
    $(this).css("transition-delay", 0.5 * index + "s");
  });
});
