//navi on click
$("li").on("click", function () {
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - 63,
  });
  $(this)
    .children("a")
    .addClass("active")
    .parent()
    .siblings()
    .children()
    .removeClass("active");
});

//navi on scroll
function changeSection() {
  const scrollValue = $(window).scrollTop();

  const heightFeatures = $(".features").offset().top;
  const heightSlogan = $(".slogan").offset().top;
  const heightHobby = $(".hobby").offset().top;
  const heightContact = $(".contact").offset().top;

  if (scrollValue < heightFeatures - 65) {
    $("nav li").children().removeClass("active");
  } else if (scrollValue < heightSlogan - 65) {
    $("nav li").not(".skills").children().removeClass("active");
    $(".skills").children().addClass("active");
  } else if (scrollValue < heightHobby - 65) {
    $("nav li").not(".motto").children().removeClass("active");
    $(".motto").children().addClass("active");
  } else if (scrollValue < heightContact - 65) {
    $("nav li").not(".freetime").children().removeClass("active");
    $(".freetime").children().addClass("active");
  } else {
    $("nav li").not(".contactme").children().removeClass("active");
    $(".contactme").children().addClass("active");
  }
}
$(window).on("scroll", changeSection);

//button arrow on mouseover
$(".arrow").on("mouseover", function () {
  $("body, html").animate({
    scrollTop: $(".features").offset().top - 65,
  });
});
