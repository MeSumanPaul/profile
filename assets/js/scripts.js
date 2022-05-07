$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".mobile-navbar").css({ opacity: "1" });
  } else {
    $(".mobile-navbar").css({ opacity: "0" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});
