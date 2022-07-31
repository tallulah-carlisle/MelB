document.addEventListener('DOMContentLoaded', function() {
  $(document).scrollTop(0);
});

$(".hamburger-menu").on("click",
  function() {
    $(".hamburger-menu").toggleClass("open");
    $(".contact-section").toggleClass("open");    // if ($(".hamburger-menu").hasClass("open") === true) {
    //   $(".contact-section").css(["opacity", "1"]);
    // } else if ($(".hamburger-menu").hasClass("open") === false) {
    //   $(".contact-section").css(["opacity", "0"]);
    // }
  });


var animation = gsap.timeline({paused: true, duration: 30});

  animation
    .to("#n01 .boxes", {
    opacity: 1,
    end: "+=300",
    duration: 10
  })
  .to("#n01", {
    opacity: 0,
    // x: -100,
    duration: 10,
  })
  .to("#n04 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n04", {
    opacity: 0,
    duration: 10,
    // x: 900
  })
  .to("#n06 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n06", {
    opacity: 0,
    duration: 10,
    // x: -50
  })
    .to("#n02 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n02", {
    opacity: 0,
    duration: 10,
  })
  .to("#n07 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n07", {
    opacity: 0,
    duration: 10,
  })
    .to("#n03 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n03", {
    opacity: 0,
    duration: 10,
  })
    .to("#n05 .boxes", {
    opacity: 1,
    duration: 10,
  })
  .to("#n05", {
    opacity: 0,
    duration: 10,
  })
  .to("#n08 .boxes", {
    opacity: 1,
    duration: 10,
    pin: true
  })
  .to("#n08", {
    opacity: 0,
    duration: 10,
  })
  .to(".image-banner", {
    opacity: 0.01,
    duration: 10
  }).to(".about-section", {
      opacity: 1,
      duration: 10
  })
  .from(".about-section img", {
    opacity: 0,
    x: -50,
    duration: 10
})
.from(".about-section figcaption", {
  opacity: 0,
  x: -50,
  duration: 2
})
.from(".right p", {
  opacity: 0,
  y: 60,
  duration: 10
});
  
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".image-banner",
  start: "top top",
  end: "+=800px",
    // markers: true,
  scrub: true,
  animation: animation,
  toggleActions: "play none reverse reset"
});
  